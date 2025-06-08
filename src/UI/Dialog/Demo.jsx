import { useState } from "react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "./Dialog";
import DialogCode from './Dialog.jsx?raw';
import usageContent from './README.md?raw';
import useDialogCode from "./useDialog.jsx?raw";

import { DialogProvider } from "./useDialog";
import Button from "../Button/Button";
import ComponentDocLayout from "../../layout/ComponentDocLayout";


// Reusable Label
const Label = ({ htmlFor, children, className = "" }) => (
    <label
        htmlFor={htmlFor}
        className={`text-sm font-medium dark:text-neutral-300 ${className}`}
    >
        {children}
    </label>
);

// Reusable Input
const Input = ({ id, name, value, onChange, className = "", ...props }) => (
    <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`border border-neutral-300 dark:border-neutral-700 px-3 py-2 rounded-lg outline-none bg-white dark:bg-neutral-800 text-sm w-full dark:text-neutral-400 ${className}`}
        {...props}
    />
);

const Demo = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log({ email, password });
        setEmail("");
        setPassword("");
    };

    const preview = (
        <DialogProvider>
            <DialogTrigger>
                <button className="bg-neutral-800 hover:bg-neutral-950 dark:bg-neutral-200 dark:hover:bg-neutral-50 dark:text-black text-white px-4 py-2 rounded cursor-pointer">
                    Login
                </button>
            </DialogTrigger>

            <Dialog>
                <DialogContent className="sm:max-w-[425px]">
                    <form onSubmit={handleLogin}>
                        <DialogHeader>
                            <DialogTitle>Login</DialogTitle>
                            <DialogDescription>
                                Enter your email and password to log in.
                            </DialogDescription>
                        </DialogHeader>

                        <div className="grid gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <DialogFooter>
                            <DialogClose>
                                <Button variant="outline">
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button type="submit" size="default">
                                Log In
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </DialogProvider>
    )

    return (
         <ComponentDocLayout
            title="Dialog"
            description="The `Dialog` component provides a fully accessible and customizable modal for React applications. It supports focus trapping, keyboard interactions, and dark mode styling using Tailwind CSS."
            preview={preview}
            usageContent={usageContent}
            files={[
                { fileName: "Dialog.jsx", code: DialogCode },
                { fileName: "useDialog.jsx", code: useDialogCode },
            ]}
        />
    );
};

export default Demo;
