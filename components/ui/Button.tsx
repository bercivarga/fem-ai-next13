import {ButtonHTMLAttributes, ReactNode} from "react";
import {tv} from "tailwind-variants"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
}

const variants = tv({
    base: "font-medium bg-blue-500 text-white rounded-lg active:opacity-80",
    variants: {
        variant: {
            primary: "bg-blue-500 text-white",
            secondary: "bg-purple-500 text-white",
            tertiary: "bg-gray-500 text-white"
        },
        size: {
            sm: "text-sm",
            md: "text-base",
            lg: "px-4 py-3 text-lg",
        },
    },
    compoundVariants: [
        {
            size: ["sm", "md"],
            class: "px-3 py-1",
        },
        {
            variant: ["primary", "secondary", "tertiary"],
            class: "hover:opacity-80 transition-opacity",
        }
    ],
    defaultVariants: {
        size: "md",
        color: "primary",
    }
})

export default function Button({
   variant = 'primary',
   size = 'md',
   children,
   ...props
}: ButtonProps) {
    return (
        <button
            className={variants({variant, size})}
            {...props}
        >
            {children}
        </button>
    )

}