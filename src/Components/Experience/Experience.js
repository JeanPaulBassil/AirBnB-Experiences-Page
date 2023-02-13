import Preview from "../Preview/Preview";
import ExperienceInfo from "../Experience Info/Experience info";


export default function Experience({img, status, rating, numberOfRatings, country, experienceName, experiencePrice}){
    return (
        <div>
            <Preview 
                img={img}
                status={status} 
            />
            <ExperienceInfo 
                rating={rating}
                numberOfRatings={numberOfRatings}
                country={country}
                experienceName={experienceName}
                experiencePrice={experiencePrice}
            />
        </div>
    )
}