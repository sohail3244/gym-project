"use client";

import React, { useState } from "react";
import {
  Plus,
  CreditCard,
  CheckCircle2,
  Layers3,
} from "lucide-react";

import Button from "@/components/ui/Button";
import BusinessPlanTable from "@/components/table/BusinessPlanTable";

export default function PlansPage() {
  const [showCreateModal, setShowCreateModal] =
    useState(false);


  const handleView = (plan) => {
    console.log("View Plan:", plan);
  };


  const handleEdit = (plan) => {
    console.log("Edit Plan:", plan);
  };


  const handleDelete = (plan) => {
    console.log("Delete Plan:", plan);
  };


  return (
    <main className="min-h-screen bg-background">

      <div className="mx-auto w-full max-w-[1600px] space-y-6 p-4 sm:p-6 lg:p-8">

        {/* ==================================================
            PAGE HEADER
        =================================================== */}

        <div
          className="
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <div>

            <div className="flex items-center gap-2">

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                "
              >
                <CreditCard size={20} />
              </div>

              <div>

                <h1
                  className="
                    text-xl
                    font-bold
                    tracking-tight
                    text-foreground
                    sm:text-2xl
                  "
                >
                  Business Plans
                </h1>

                <p className="mt-0.5 text-sm text-muted-foreground">
                  Manage subscription plans for your businesses.
                </p>

              </div>

            </div>

          </div>


          {/* CREATE BUTTON */}

          <Button
            type="button"
            icon={Plus}
            onClick={() =>
              setShowCreateModal(true)
            }
          >
            Create Plan
          </Button>

        </div>


        {/* ==================================================
            SUMMARY CARDS
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {/* TOTAL PLANS */}

          <div
            className="
              rounded-2xl
              border
              border-border
              bg-card
              p-5
              shadow-sm
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Total Plans
                </p>

                <p className="mt-2 text-2xl font-bold text-foreground">
                  6
                </p>

              </div>

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                "
              >
                <Layers3 size={19} />
              </div>

            </div>

          </div>


          {/* ACTIVE PLANS */}

          <div
            className="
              rounded-2xl
              border
              border-border
              bg-card
              p-5
              shadow-sm
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Active Plans
                </p>

                <p className="mt-2 text-2xl font-bold text-foreground">
                  4
                </p>

              </div>

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-emerald-500/10
                  text-emerald-600
                  dark:text-emerald-400
                "
              >
                <CheckCircle2 size={19} />
              </div>

            </div>

          </div>


          {/* MONTHLY REVENUE EXAMPLE */}

          <div
            className="
              rounded-2xl
              border
              border-border
              bg-card
              p-5
              shadow-sm
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Starting Price
                </p>

                <p className="mt-2 text-2xl font-bold text-foreground">
                  ₹499
                </p>

              </div>

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                "
              >
                <CreditCard size={19} />
              </div>

            </div>

          </div>

        </div>


        {/* ==================================================
            PLAN TABLE
        =================================================== */}

        <BusinessPlanTable
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

      </div>


      {/* ====================================================
          CREATE PLAN MODAL
      ===================================================== */}

      {showCreateModal && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/40
            p-4
            backdrop-blur-sm
          "
          onClick={() =>
            setShowCreateModal(false)
          }
        >

          <div
            className="
              w-full
              max-w-lg
              rounded-2xl
              border
              border-border
              bg-background
              p-6
              shadow-2xl
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <h2 className="text-lg font-bold text-foreground">
              Create Business Plan
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Plan creation form will be connected here.
            </p>

            <div className="mt-6 flex justify-end gap-3">

              <Button
                variant="outline"
                type="button"
                onClick={() =>
                  setShowCreateModal(false)
                }
              >
                Cancel
              </Button>

              <Button
                type="button"
                onClick={() =>
                  setShowCreateModal(false)
                }
              >
                Continue
              </Button>

            </div>

          </div>

        </div>
      )}

    </main>
  );
}