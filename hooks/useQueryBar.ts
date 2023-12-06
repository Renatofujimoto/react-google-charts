import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchQuery = async () => {
    const { data } = await axios.get("http://localhost:4000/data2")
    return data;
}

const useQueryBar = () => useQuery({
    queryKey: ["data2"],
    queryFn: () => fetchQuery(),
})

export { useQueryBar, fetchQuery }