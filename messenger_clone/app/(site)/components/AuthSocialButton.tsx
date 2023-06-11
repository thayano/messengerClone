'use client'

import { IconType } from "react-icons"

interface AuthSocialButtonProps {
    icon: IconType,
    onclick: () => void
}
export const AuthSocialButton : React.FC<AuthSocialButtonProps> = ({
    icon: Icon,
    onclick
}) =>{
    return (
        <button
            type="button"
            onClick={onclick}
            className="
                inline-flex
                w-full
                justify-center
                rounded-md
                bg-white
                px-4
                py-2
                text-gray-300
                shadow-sm
                ring-1
                ring-inset
                ring-gray-500
                hover:bg-gray-50
                focus:outline-offset-0">
                    <Icon/>

        </button>
    )
}