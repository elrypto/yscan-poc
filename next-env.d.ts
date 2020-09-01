/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.gql' {
  const content: any;
  export default content;
}

declare module '*.graphql' {
  const content: any;
  export default content;
}

declare module '*.gql' {
  import { DocumentNode, DocumentNode } from 'graphql';

  const content: DocumentNode;
  export default content;

}

declare module '*.graphql' {


  const content: DocumentNode;
  export default content;
}