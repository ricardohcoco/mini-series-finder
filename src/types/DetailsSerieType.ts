export type DetailsSerieType = {
    show: {
        id: number;
        name: string;
        
        image: {
            medium: string;
        }; 
        
        summary: string;
        
        rating: {
            avarage: number | null;
        }; 

        genres: string[];
    };
};