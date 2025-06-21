import Link from "next/link";
import { TechStack } from "@/components/tech-stack";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const whatIDo = [
  {
    title: "AI & ML Engineering",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-primary opacity-70 transition-transform duration-300 group-hover:rotate-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5v15m7.5-7.5h-15"></path></svg>,
    content: [
      "Developed advanced ML/DL models using TensorFlow, Keras, and Scikit-Learn",
      "Worked on Computer Vision and NLP projects",
      "Implemented model deployment pipelines using FastAPI and Docker",
    ]
  },
  {
    title: "Data Science & Analysis",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-primary opacity-70 transition-transform duration-300 group-hover:-rotate-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h4v11H3V10zm7-6h4v17h-4V4zm7 8h4v9h-4v-9z"></path></svg>,
    content: [
      "Performed EDA using Pandas, NumPy, Seaborn, and Matplotlib",
      "Built interactive dashboards with Power BI and Tableau",
      "Conducted statistical analysis, hypothesis testing, and A/B experiments",
      "Expert in SQL and Snowflake for Data Warehousing",
      "Applied Clustering, Regression, and Time Series Forecasting techniques",
    ]
  },
  {
    title: "DevOps & MLOps",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-primary opacity-70 transition-transform duration-300 group-hover:scale-110"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v16H4V4zm8 8l4-4m-4 4l-4-4m4 4v4"></path></svg>,
    content: [
      "Built and monitored CI/CD pipelines using Jenkins and GitHub Actions",
      "Managed containerized ML services with Docker and Kubernetes",
      "Implemented MLOps pipelines using MLflow and DVC for model versioning",
      "Deployed models on AWS (SageMaker, Lambda) and Azure ML",
    ]
  }
]

export function HomeSection() {
  return (
    <section id="home" className="text-foreground mt-12 md:mt-0">
      <div className="max-w-5xl mx-auto space-y-8 md:py-36 pb-14">
        <div className="text-left space-y-4">
          <p className="text-md md:text-lg text-muted-foreground shiny-white">
            Hi, I'm Ahmed Elseginy
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 md:gap-4">
            <h1 className="text-foreground text-5xl md:text-6xl font-medium text-pretty leading-none">
              Full-Stack Developer
            </h1>
            <p className="text-md md:text-2xl text-muted-foreground">
              I build beautiful, responsive, and highly performant web applications.
            </p>
          </div>
          <div className="flex justify-start gap-2 pt-3 md:pt-6">
            <Link href="https://github.com" target="_blank" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition duration-300 ease-in-out border border-border p-3 rounded-xl bg-secondary/50 hover:bg-accent">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
              </svg>
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition duration-300 ease-in-out border border-border p-3 rounded-xl bg-secondary/50 hover:bg-accent">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
              </svg>
            </Link>
            <Link href="mailto:ahmed.elseginy.21@gmail.com" target="_blank" aria-label="Email" className="text-muted-foreground hover:text-foreground transition duration-300 ease-in-out border border-border p-3 rounded-xl bg-secondary/50 hover:bg-accent">
               <svg xmlns="http://www.w3.org/2000/svg" width="2.1em" height="2.1em" viewBox="0 0 24 24">
                <path fill="currentColor" d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64"></path>
              </svg>
            </Link>
          </div>
        </div>

        <TechStack />

        <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="text-left pt-3 md:pt-9 flex-1">
              <h3 className="text-foreground text-3xl md:text-4xl font-semibold md:mb-6">What I do?</h3>
              <Accordion type="single" collapsible className="w-full space-y-4 mt-4">
                {whatIDo.map((item) => (
                  <AccordionItem value={item.title} key={item.title} className="bg-secondary/50 rounded-2xl border-border hover:bg-secondary transition-all">
                    <AccordionTrigger className="p-4 text-lg text-left group">
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span className="block truncate text-foreground">{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <ul className="space-y-2 text-muted-foreground text-sm list-disc pl-5">
                        {item.content.map(point => <li key={point}>{point}</li>)}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
             <div className="flex-1 w-full h-full flex items-center justify-center">
                 <img
                  src="https://placehold.co/550x550.png"
                  data-ai-hint="developer portrait"
                  alt="Ahmed Elseginy"
                  width={500}
                  height={500}
                  className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
                />
            </div>
        </div>
      </div>
    </section>
  );
}
