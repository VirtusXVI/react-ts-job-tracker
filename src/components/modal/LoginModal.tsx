import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useLogin } from "../../context/LoginContext";

export default function LoginModal(props: {type: String}) {
	const { toggleLogin } = useLogin();
	const { type } = props
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (err) {
			console.error(err);
		}

		toggleLogin;
	};

	return (
		<div>
			<div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-black dark:text-white text-left shadow-xl transition-all sm:my-8">
				<div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
					<div className="sm:flex sm:items-start">
						<div className="mt-3 text-center sm:mt-0 px-8">
							<h3 className="text-base font-semibold" id="modal-title">
								{ type }
							</h3>
							<div className="mt-2">
								<form className="rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
									<div className="mb-4">
										<label className="block text-sm font-bold mb-2">
											Username
										</label>
										<input className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={e => setEmail(e.target.value)}/>
									</div>
									<div className="mb-6">
										<label className="block text-sm font-bold mb-2">
											Password
										</label>
										<input className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)}/>
									</div>

									<div className="py-3 flex flex-col gap-3 sm:flex sm:flex-row sm:justify-end">
										<button type="button" onClick={() => toggleLogin()} className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs sm:w-auto">
											Cancel
										</button>
										<button type="submit" className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs sm:w-auto">
											{ type }
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	);
}