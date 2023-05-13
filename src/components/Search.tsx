import algoliasearch from "algoliasearch/lite"
import {
    Hits,
    InstantSearch,
    PoweredBy,
    RefinementList,
    SearchBox,
    Configure,
    Highlight,
    useHits,
    Index,
} from "react-instantsearch-hooks-web"

const algoliaClient = algoliasearch(
    import.meta.env.PUBLIC_ALGOLIA_APP_ID,
    import.meta.env.PUBLIC_ALGOLIA_SEARCH_KEY,
    {}
)
const searchClient = {
    ...algoliaClient,
    search(requests) {
        if (requests.every(({ params }) => !params.query)) {
            return Promise.resolve({
                results: requests.map(() => ({
                    hits: [],
                    nbHits: 0,
                    nbPages: 0,
                    page: 0,
                    processingTimeMS: 0,
                    hitsPerPage: 0,
                    exhaustiveNbHits: false,
                    query: "",
                    params: "",
                })),
            })
        }

        return algoliaClient.search(requests)
    },
}

function Hit({ hit }) {
    return (
        <a href={`/monsters/${hit.slug}`}>
            <Highlight attribute="name" hit={hit} />
        </a>
    )
}

function CustomHits(props) {
    const { hits, results, sendEvent } = useHits(props)

    return (
        <div>
            <ol>
                {hits.map((hit) => (
                    <li key={hit.objectID}>
                        <Highlight attribute="name" hit={hit} />
                    </li>
                ))}
            </ol>
            {hits.length > 0 && <PoweredBy className="c" />}
        </div>
    )
}

export default function Search() {
    return (
        <>
            <h2>swag</h2>
            <InstantSearch
                searchClient={searchClient}
                indexName="monsters"
                initialUiState={{
                    indexName: {
                        query: undefined,
                        page: 5,
                    },
                }}
            >
                <Configure analytics={false} filters="" hitsPerPage={5} />
                <SearchBox />
                <div>
                    <CustomHits></CustomHits>
                </div>

                <RefinementList attribute="type" />
            </InstantSearch>
        </>
    )
}
