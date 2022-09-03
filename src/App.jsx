import Header from './components/Header'
import Iphone3D from './components/Iphone3D'

function App() {
	return (
		<div className='App bg-slate-900 min-h-screen'>
			<Header />
			<main className='flex flex-wrap items-center p-5 max-w-7xl gap-8 justify-around mx-auto'>
				<div className='flex-1 basis-0 gap-5 flex flex-col p-2'>
					<h1 className='text-4xl text-white font-extrabold'>Hola mundo</h1>
					<p className='text-white text-lg text-bold pr-5'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
						eum veritatis repudiandae nisi
					</p>
				</div>

				<Iphone3D />
			</main>
		</div>
	)
}

export default App
