import { z, defineCollection} from "astro:content";

const projectsCollection = defineCollection({
  schema: ({image}) => z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string().optional(), // cover
    screen: image(), // screen
    tech: z.string(z.string()).optional(), // tag o tecnologie
    github: z.string().optional(), // link github
    app: z.string().optional(), // link app
    published: z.date().optional() // data di creazione
  }),
});

export const collections = {
  projects: projectsCollection,
};