import { useState } from "react";

const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    // console.log("Name:", name, "Email:", email, "Password:", password);

    const handleSubmit = (event) => {
        event.preventDefault(); //prevent Default behavior
        if (!isChecked) {
            return;
        }
        const user = {
            name: name,
            email: email,
            password: password
        }
        // console.log(user);
        setIsSubmit(true);

    }


    return (
        <div className="h-screen flex justify-center items-center bg-purple-400">
            <form onSubmit={(event) => handleSubmit(event)}
                className="bg-white p-4 rounded-lg w-2/3 lg:w-2/5 ">
                <h2 className="text-purple-700 text-center text-3xl font-bold ">Sign-up Form: </h2>
                <label className="mb-2 text-lg font-semibold">Name:</label>
                <input
                    onChange={(event) => setName(event.target.value)}
                    required
                    type="text" placeholder="Enter your name" className="py-2 px-1 border-dotted  border-gray-400 w-full text-lg mb-3" />

                <label className="mb-2 text-lg font-semibold">Email:</label>
                <input
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="py-2 px-1 border-dotted  border-gray-400 w-full text-lg mb-3" />

                <label className="mb-2 text-lg font-semibold">Password:</label>
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="py-2 px-1 border-dotted  border-gray-400 w-full text-lg mb-3" />

                <input
                    onChange={(event) => setIsChecked(event.target.checked)}
                    type="checkbox" name="" id="" /><span>Do you agree with our terms and conditions?</span>

                <div className="flex justify-end mt-3">
                    <button type="submit" className="bg-purple-500 rounded text-white px-4 py-2">Submit</button>
                </div>
            </form>

            {/* modal */}
            {
                isSubmit && (
                    <div className="flex justify-center items-center fixed w-full h-screen bg-green-300">
                        <div className="p-2 flex flex-col items-center w-2/4 h-2/4 bg-gray-200">
                            <h1 className="text-3xl font-bold text-purple-600 mb-4">Your form successfully submitted !</h1>
                            <p className="text-lg font-normal">Name: {name}</p>
                            <p className="text-lg font-normal">Email: {email}</p>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default Registration;