import { Link } from "react-router-dom";

const Login = () => {

    const handleSingUser = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div className="hero min-h-screen bg-base-200 py-20">
            <div className="w-full flex justify-center items-center flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-7">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSingUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="pl-8">New here? Please <Link to='/register'>
                        <button className="btn btn-link">REGISTER</button>
                    </Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;