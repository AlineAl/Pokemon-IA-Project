import { gql } from "@apollo/client";

const GET_LAUNCHES = gql`
    query Launches($limit: Int, $offset: Int) {
        launches(limit: $limit, offset: $offset) {
            id
            launch_date_local
            launch_site {
                site_name
            }
            launch_success
            launch_year
            links {
                flickr_images
                article_link
                video_link
            }
            mission_name
            details
        }
    }
`
;

export default GET_LAUNCHES;