import ProfileCard from "./bits/ProfileCard"
import DecryptedText from "./bits/DecryptedText"
import ScrollVelocity from "./bits/ScrollVelocity"

const About = ({ aboutData }) => {
    return (
        <>
            <div className="py-32 text-center w-full overflow-hidden bg-slate-950 bg-gradient-to-b from-neutral to-slate-950">
                <ScrollVelocity
                    texts={aboutData.title}
                    velocity={20}
                />
            </div>
            <div className="p-5 md:px-20 pt-20 pb-32 shadow-none bg-slate-950">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10">
                    {/* C1 [left / up] */}
                    <div className="flex justify-center items-center">
                        <ProfileCard
                            name={aboutData.profileData.name}
                            title={aboutData.profileData.title}
                            handle={aboutData.profileData.handle}
                            status={aboutData.profileData.status}
                            contactText={aboutData.profileData.contactText}
                            avatarUrl="/measf.png"
                            showUserInfo={true}
                            enableTilt={true}
                            onContactClick={() => console.log('Contact clicked')}
                        />
                    </div>
                    {/* C2 [right / bottom] */}
                    <div className="flex flex-col justify-start items-start">
                        <div className="font-share-tech font-extralight text-base text-justify mt-10 p-5">
                            <p>{aboutData.description}</p>
                        </div>
                        <div className="flex flex-col justify-start items-start p-5">
                            <p>{aboutData.skills.title}</p>
                            <ul className="flex ml-5 list-none gap-2 text-accent-content flex-wrap p-2">
                                {aboutData.skills.skills.map((skill, index) => (
                                    <li key={index} className="text-base text-justify hover:text-accent cursor-pointer transition-all">
                                        <DecryptedText
                                            text={skill}
                                            animateOn="view"
                                            revealDirection="start"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex justify-start items-start p-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"></path></g></svg>
                            <span className="ml-2 text-xl">{aboutData.cta}</span>
                        </div>
                        <div className='w-full flex justify-center md:justify-start items-center pl-10'>
                            <button className="btn btn-outline btn-warning btn-lg btn-wide">{aboutData.cta_button}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About