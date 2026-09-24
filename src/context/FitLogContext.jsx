"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import Toast from "@/components/shared/Toast";

const FitLogContext = createContext(null);

const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";
const PLAN_LIMIT = 5;

function getStoredItems(key) {
    if (typeof window === "undefined") return [];

    try {
        const stored = localStorage.getItem(key);
        const parsed = stored ? JSON.parse(stored) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

export function FitLogProvider({ children }) {
    const [plan, setPlan] = useState([]);
    const [saved, setSaved] = useState([]);
    const [isReady, setIsReady] = useState(false);
    const [toast, setToast] = useState(null);

    const toastTimer = useRef(null);

    useEffect(() => {
    const timer = setTimeout(() => {
        setPlan(getStoredItems(PLAN_KEY));
        setSaved(getStoredItems(SAVED_KEY));
        setIsReady(true);
    }, 0);

    return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isReady) return;
        localStorage.setItem(PLAN_KEY, JSON.stringify(plan));
    }, [plan, isReady]);

    useEffect(() => {
        if (!isReady) return;
        localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
    }, [saved, isReady]);

    useEffect(() => {
        return () => {
            if (toastTimer.current) {
                clearTimeout(toastTimer.current);
            }
        };
    }, []);

    const showToast = (message, type = "success") => {
        if (toastTimer.current) {
            clearTimeout(toastTimer.current);
        }

        setToast({ message, type });

        toastTimer.current = setTimeout(() => {
            setToast(null);
        }, 2500);
    };

    const addToPlan = (workout) => {
        if (!workout?.id) {
            showToast("Workout information is invalid", "error");
            return;
        }

        setPlan((currentPlan) => {
            const alreadyAdded = currentPlan.some(
                (item) => String(item.id) === String(workout.id)
            );

            if (alreadyAdded) {
                showToast("Workout is already in today's plan", "error");
                return currentPlan;
            }

            if (currentPlan.length >= PLAN_LIMIT) {
                showToast("Today's plan can contain only five workouts", "error");
                return currentPlan;
            }

            showToast("Added to today's plan");

            return [
                ...currentPlan,
                {
                    ...workout,
                    done: false,
                },
            ];
        });
    };

    const saveWorkout = (workout) => {
        if (!workout?.id) {
            showToast("Workout information is invalid", "error");
            return;
        }

        setSaved((currentSaved) => {
            const alreadySaved = currentSaved.some(
                (item) => String(item.id) === String(workout.id)
            );

            if (alreadySaved) {
                showToast("Workout is already saved", "error");
                return currentSaved;
            }

            showToast("Saved for later");
            return [...currentSaved, workout];
        });
    };

    const removeFromPlan = (id) => {
        setPlan((currentPlan) =>
            currentPlan.filter((item) => String(item.id) !== String(id))
        );

        showToast("Workout removed from today's plan");
    };

    const removeFromSaved = (id) => {
        setSaved((currentSaved) =>
            currentSaved.filter((item) => String(item.id) !== String(id))
        );

        showToast("Workout removed from saved list");
    };

    const markAsDone = (id) => {
        setPlan((currentPlan) =>
            currentPlan.map((item) =>
                String(item.id) === String(id)
                    ? {
                        ...item,
                        done: true,
                    }
                    : item
            )
        );

        showToast("Workout marked as done");
    };

    const isInPlan = (id) => {
        if (!id) return false;

        return plan.some(
            (item) => String(item.id) === String(id)
        );
    };

    const isSaved = (id) => {
        if (!id) return false;

        return saved.some(
            (item) => String(item.id) === String(id)
        );
    };

    return (
        <FitLogContext.Provider
            value={{
                plan,
                saved,
                isReady,
                planCount: plan.length,
                savedCount: saved.length,
                planLimit: PLAN_LIMIT,
                addToPlan,
                saveWorkout,
                removeFromPlan,
                removeFromSaved,
                markAsDone,
                isInPlan,
                isSaved,
            }}
        >
            {children}

            <Toast
                toast={toast}
                onClose={() => setToast(null)}
            />
        </FitLogContext.Provider>
    );
}

export function useFitLog() {
    const context = useContext(FitLogContext);

    if (!context) {
        throw new Error("useFitLog must be used inside FitLogProvider");
    }

    return context;
}