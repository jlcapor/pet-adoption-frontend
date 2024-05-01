'use client'
const Container = ({children}: {children: React.ReactNode}) => {
  return (
   <div className="max-w-[1920px] w-full mx-auto xl:px-10 md:px-2 px-4">
    {children}
  </div>
  )
}

export default Container
