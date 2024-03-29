import { createContext, type ComponentChildren } from 'preact'
import { useContext } from 'preact/hooks'

export type Page = {
	title: string
	subtitle?: string
	slug: string
	html: string
	lang?: string
}

export const PagesContext = createContext<{
	pages: Page[]
}>({
	pages: [],
})

export const Provider = ({
	children,
	pages,
}: {
	children: ComponentChildren
	pages: Page[]
}) => {
	return (
		<PagesContext.Provider
			value={{
				pages,
			}}
		>
			{children}
		</PagesContext.Provider>
	)
}

export const Consumer = PagesContext.Consumer

export const usePages = () => useContext(PagesContext)
