export default function AuthLayout({children}:{children:React.ReactNode}){
return(
    <div className="">
        <h2>Inner Layout</h2>
        {children}
    </div>
)
}