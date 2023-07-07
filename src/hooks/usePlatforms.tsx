import useData from "./useData";

// [{platforms;[{id:number; name:string; slug:string}]}]
// interface Platforms {
//   initialArray: PlatformsObject[];
// }

// interface PlatformsObject {
//   platforms: PlatformsArrayObject[];
// }

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
