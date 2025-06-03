import ScrollVelocity from './bits/ScrollVelocity';
import ServiceCard from './ServiceCard';

const Services = ({ servicesData }) => {
    return (
        <>
            <div className="pt-32 text-center w-full overflow-hidden">
                <ScrollVelocity
                    texts={servicesData.title}
                    velocity={20}
                />
            </div>
            <div id="services" className="mx-auto p-5 w-full max-w-screen-xl bg-neutral">
                {/* Title and Description */}
                <div className="text-center my-32">
                    <p className="font-share-tech text-lg md:text-2xl  mt-4 max-w-2xl mx-auto">
                        {servicesData.description}
                    </p>
                </div>
                {/* Services List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.servicesList.map((service, index) => (
                        <ServiceCard
                            key={index}
                            service={service.title}
                            description={service.description}
                            image_url={service.image_url}
                        />
                    ))}
                </div>
                <div className='mt-32 flex justify-center items-center'>
                    <button className="btn btn-outline btn-warning btn-wide btn-lg">{servicesData.cta}</button>
                </div>
            </div>
        </>
    );
};

export default Services