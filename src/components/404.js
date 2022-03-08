const ErrorPage = () =>{
	const refreshPage = () => {
		window.location.reload(false);
	  }
	return(
    <main className="text-center font-sans no-underline">
	  <h1 className="text-7xl">Whoops!</h1>
	  <h2 className="text-5xl">Sorry, We can't find the character information you're looking for</h2>
	  <button className="py-2 px-4 my-8 hover:scale-110 rounded-md text-yellow-50 bg-lime-600 text-6xl" onClick={refreshPage}>Go back to Homepage</button>
    </main>
	)
}
export default ErrorPage