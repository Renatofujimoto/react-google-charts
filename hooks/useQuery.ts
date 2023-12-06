import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchQuery = async () => {
    const { data } = await axios.get("http://localhost:4000/data")
    return data;
}

const useQueryPie = () => useQuery({
    queryKey: ["data"],
    queryFn: () => fetchQuery(),
})

export { useQueryPie, fetchQuery }