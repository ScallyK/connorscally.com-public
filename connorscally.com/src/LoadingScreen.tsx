import './assets/css/LoadingScreen.css'

export default function LoadingScreen({progress}: {progress: number}) {

    return (
        <div className="loading-screen">
            <div className="loading-text">{Math.floor(progress * 100)}%</div>
        </div>
    )

}
