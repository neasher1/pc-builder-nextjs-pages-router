import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react"

const LoginPage = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    return (
        <div className='h-[500px] flex justify-center items-center my-16'>
            <div className='w-96 card shadow-2xl p-8'>
                {/* <h2 className="text-4xl font-bold text-accent mb-4 text-center">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", {
                                required: "email address is required",
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className="text-error">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "password is required",
                                minLength: { value: 6, message: "password must be 6 characters or longer" }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className="text-error">{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text-alt">Forget Password?</span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full text-white my-2' type="submit" value="Login" />
                </form>
                <div className="divider">OR</div> */}

                <button onClick={() => signIn("google", {
                    callbackUrl: "http://localhost:3000/"
                })} className='uppercase btn btn-outline text-sm'>Continue With Google</button>
            </div>
        </div>
    );
};

export default LoginPage;