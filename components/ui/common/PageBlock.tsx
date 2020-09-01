
export interface PageBlockProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title?: string;
  twoTone?: boolean;
  titleLess?: boolean;
}


export const PageBlock = ({ children, title = 'title', twoTone = false, titleLess = false }:
  PageBlockProps) => (
    <div className="max-w-4xl m-auto mt-10 bg-white rounded-lg shadow-lg">
      {!titleLess &&
        <h1 id="block-header" className="p-4 text-lg border-b border-cool-gray-200 text-cool-gray-600">
          {title}
        </h1>
      }
      <div id="block-body" className={`p-4 ${twoTone && 'bg-cool-gray-100'}`}>
        <div className="text-cool-gray-600">
          {children}
        </div>
      </div>
    </div>
  )
