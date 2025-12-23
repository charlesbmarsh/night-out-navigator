import { useState } from "react";
import { Receipt, Camera, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Expense {
  id: number;
  type: "uber" | "bar" | "food";
  description: string;
  amount: number;
  paidBy: string;
  timestamp: string;
}

const ExpenseTracker = () => {
  const [expenses] = useState<Expense[]>([
    { id: 1, type: "bar", description: "First round at Skybar", amount: 48.50, paidBy: "Mike", timestamp: "10:30 PM" },
    { id: 2, type: "uber", description: "Uber to downtown", amount: 24.00, paidBy: "Sarah", timestamp: "9:45 PM" },
    { id: 3, type: "bar", description: "Shots! 🥃", amount: 36.00, paidBy: "You", timestamp: "11:15 PM" },
  ]);

  const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);
  const perPerson = totalSpent / 4; // Assuming 4 people in group

  return (
    <Card className="glass border-border/30" glow>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Receipt className="h-5 w-5 text-primary" />
            Expenses
          </span>
          <Button variant="outline" size="sm" className="gap-2">
            <Camera className="h-4 w-4" />
            Add Receipt
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Summary */}
        <div className="grid grid-cols-2 gap-3">
          <div className="glass rounded-xl p-3 text-center">
            <DollarSign className="h-5 w-5 mx-auto text-primary mb-1" />
            <span className="text-xs text-muted-foreground block">Total</span>
            <span className="font-display font-bold text-xl">${totalSpent.toFixed(2)}</span>
          </div>
          <div className="glass rounded-xl p-3 text-center">
            <Users className="h-5 w-5 mx-auto text-secondary mb-1" />
            <span className="text-xs text-muted-foreground block">Per Person</span>
            <span className="font-display font-bold text-xl">${perPerson.toFixed(2)}</span>
          </div>
        </div>

        {/* Expense list */}
        <div className="space-y-2">
          {expenses.map((expense) => (
            <div 
              key={expense.id}
              className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className={`
                w-10 h-10 rounded-lg flex items-center justify-center text-lg
                ${expense.type === "uber" ? "bg-primary/20" : ""}
                ${expense.type === "bar" ? "bg-secondary/20" : ""}
                ${expense.type === "food" ? "bg-success/20" : ""}
              `}>
                {expense.type === "uber" ? "🚗" : expense.type === "bar" ? "🍸" : "🍕"}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{expense.description}</p>
                <p className="text-xs text-muted-foreground">Paid by {expense.paidBy}</p>
              </div>
              <div className="text-right">
                <p className="font-display font-semibold">${expense.amount.toFixed(2)}</p>
                <p className="text-xs text-muted-foreground">{expense.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpenseTracker;
