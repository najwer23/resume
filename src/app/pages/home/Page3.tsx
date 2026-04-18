import { PaperA4 } from '@app/paperA4/PaperA4';
import { API } from '@app/sections/API';
import { BlogPostCreator } from '@app/sections/BlogPostCreator';

export const Page3: React.FC<{}> = () => {
  return (
    <PaperA4>
      <BlogPostCreator />
      <API />
    </PaperA4>
  );
};
