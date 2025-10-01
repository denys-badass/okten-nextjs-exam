'use client'

import {Input} from "@heroui/input";
import {Button} from "@heroui/button";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {loginValidator} from "@/validators/login-validator";
import {useLogin} from "@/hooks/useLogin";
import styles from "./LoginForm.module.css"

type LoginFormProps = {
    username: string;
    password: string;
}

const LoginForm = () => {
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<LoginFormProps>({
        mode: "onChange",
        resolver: joiResolver(loginValidator)
    });
    const {loginHandler} = useLogin();

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(loginHandler)} className={styles.form}>
                <Input
                    label="Username"
                    classNames={{
                        label: [styles.inputLabel],
                        inputWrapper: [styles.inputWrapper],
                    }}
                    isInvalid={!!errors.username}
                    errorMessage={errors.username?.message}
                    {...register("username")}
                />
                <Input
                    label="Password"
                    type="password"
                    classNames={{
                        label: [styles.inputLabel],
                        inputWrapper: [styles.inputWrapper],
                    }}
                    isInvalid={!!errors.password}
                    errorMessage={errors.password?.message}
                    {...register("password")}
                />
                <Button size="lg" type="submit" className={styles.button} disabled={!isValid}>
                    Sign In to MovieHub
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;