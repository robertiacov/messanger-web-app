"use client"

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { useCallback, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "@/app/(site)/components/AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

type Varient = "LOGIN" | "REGISTER";

const AuthForm = () => {
    const [varient, setVarient] = useState<Varient>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(
      () => {
        if (varient === "LOGIN") {
            setVarient("REGISTER")
        } else {
            setVarient("LOGIN")
        }
      },
      [varient]
    )

    const {
        register, handleSubmit, formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        if (varient === "REGISTER") {
            // Axios Register
        } 

        if (varient === "LOGIN") {
            // NextAuth SignIN
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);

        // NextAuth Social Sign In
    }
    
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form
                className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}
            >
                {varient === "REGISTER" && (
                    <Input 
                        id="name" 
                        label="Name" 
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                )}
                <Input 
                    id="email" 
                    label="Email address" 
                    type="email"
                    register={register}
                    errors={errors}
                    disabled={isLoading}
                />
                <Input 
                    id="password" 
                    label="Password" 
                    type="password"
                    register={register}
                    errors={errors}
                    disabled={isLoading}
                />
                <div>
                    <Button
                        disabled={isLoading}
                        fullWidth
                        type="submit"
                    >
                        {varient === "LOGIN" ? "Sign in" : "REGISTER"}
                    </Button>
                </div>
            </form>
            <div className="mt-6">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">
                            Or continue with
                        </span>
                    </div>
                </div>

                <div className="mt-6 flex gap-2">
                    <AuthSocialButton 
                        icon={BsGithub}
                        onClick={() => socialAction("github")}
                    />
                    <AuthSocialButton 
                        icon={BsGoogle}
                        onClick={() => socialAction("google")}
                    />
                </div>
            </div>
            
            <div className="
                flex
                gap-2
                justify-center
                text-sm
                mt-6
                px-2
                text-gray-500
            ">
                <div>
                    {varient === "LOGIN" ? "New to Messanger?" : "Already have an account?"}
                </div>
                <div
                    onClick={toggleVariant}
                    className="underline cursor-pointer"
                >
                    {varient === "LOGIN" ? "Create an account" : "Login"}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AuthForm