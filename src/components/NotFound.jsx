function NotFound() {
	return (
		<div className="flex min-h-screen bg-gray-100">
			<div className="m-auto text-center">
				<h1 className="text-5xl font-semibold text-gray-800 mb-4">404</h1>
				<p className="text-xl text-gray-600 mb-4">Oops! Page not found.</p>
				<p className="text-gray-500 mb-8">The page you are looking for might have been removed or does not exist.</p>
				<button
					className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
					onClick={() => {
						window.location.href = '/';
					}}>
					Go to Homepage
				</button>
			</div>
		</div>
	);
}

export default NotFound;
