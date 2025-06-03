import ShinyText from "./bits/ShinyText"

const ServiceCard = ({ service, description, image_url }) => {
    return (
        <div className="card bg-slate-950 max-w-96 shadow-sm border border-accent-content hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out ">
            <div className="card-body">
                <h2 className="card-title">
                    <ShinyText text={service} disabled={false} speed={5} className='custom-class' />
                    {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p>{description}</p>
            </div>
            <figure>
                <img
                    src={image_url}
                    alt="service" />
            </figure>
        </div>
    )
}

export default ServiceCard