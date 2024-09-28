'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ChallengeCard = ({ title, progress, total, backgroundImage, initialStatus }) => {
  const [status, setStatus] = useState(initialStatus)
  const progressPercentage = (progress / total) * 100
  const handleComplete = () => {
    setStatus('completed')
  }

  return (
    <div className="relative bg-gray-200 rounded-lg overflow-hidden mb-4" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="p-4 bg-black bg-opacity-50 text-white space-y-4">
        <h3 className="font-bold">{title}</h3>
        <div>
          <div className="flex justify-end mb-1">
            <p className="text-sm">Dzisiaj {progress}/{total}</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-gray-400 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </div>
        {status === 'completed' ? (
          <div className="bg-green-500 text-white rounded-full py-2 px-4 inline-flex items-center justify-center w-32">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Ukończono
          </div>
        ) : (
          <button 
            className="bg-black text-white rounded-full py-2 px-4 w-32"
            onClick={handleComplete}
          >
            Ukończ
          </button>
        )}
      </div>
    </div>
  )
}

const SuggestedChallengeCard = ({ title, icon }) => (
  <div className="bg-gray-200 h-[140px] rounded-lg p-4 mb-4 space-y-4">
    <div className="flex items-center">
      {icon === 'beer' && (
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )}
      {icon === 'water' && (
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2.34" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 14.66l-8-8L4 12.66V20h14v-5.34z" />
        </svg>
      )}
      {icon === 'steps' && (
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )}
      {icon === 'yoga' && (
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )}
      <h3 className="font-bold">{title}</h3>
    </div>
    <Link href="#" className="bg-black text-white rounded-full py-2 px-4 inline-block w-32 text-center">
      Przyjmij
    </Link>
  </div>
)

export default function Home() {
  const level = 33
  const maxLevel = 100
  const levelProgress = (level / maxLevel) * 100

  return (
    <div className="max-w-md mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <Link href="/profile" className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
          <Image src="/placeholder-avatar.jpg" alt="Avatar" width={48} height={48} />
        </Link>
        <div className="flex-grow mx-4">
          <div className="font-bold mb-1">Poziom</div>
          <div className="bg-gray-200 rounded-full h-4 flex items-center">
            <div className="bg-black rounded-full h-4" style={{ width: `${levelProgress}%` }}></div>
            <span className="text-xs font-bold ml-2">{level}</span>
          </div>
        </div>
        <Link href="/add-challenge" className="ml-4 p-2 bg-gray-200 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </Link>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Twoje challenge</h2>
        <ChallengeCard 
          title="30 dni picia piwa z rzędu" 
          progress={0}
          total={1}
          backgroundImage="/beer-challenge.jpg"
          initialStatus="ongoing"
        />
        <ChallengeCard 
          title="7 szklanek wody dziennie" 
          progress={2}
          total={7}
          backgroundImage="/water-challenge.jpg"
          initialStatus="ongoing"
        />
        <ChallengeCard 
          title="30 dni picia piwa z rzędu" 
          progress={1}
          total={1}
          backgroundImage="/beer-challenge.jpg"
          initialStatus="completed"
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Zobacz chelenge stworzone przez nas</h2>
        <SuggestedChallengeCard title="30 dni picia piwa z rzędu" icon="beer" />
        <SuggestedChallengeCard title="7 dni picia wody z rzędu" icon="water" />
        <SuggestedChallengeCard title="10000 kroków" icon="steps" />
        <SuggestedChallengeCard title="Yoga raz w tygodniu" icon="yoga" />
      </section>

      <Link href="/more-challenges" className="block text-center text-blue-500">
        zobacz więcej wyzwań →
      </Link>
    </div>
  )
}