import { PaperA4 } from '@app/paperA4/PaperA4';
import { API } from '@app/sections/API';
import { Blog } from '@app/sections/Blog';
import { BlogPostCreator } from '@app/sections/BlogPostCreator';
import { Leetcode } from '@app/sections/leetcode/Leetcode';
import { NestNext } from '@app/sections/NestNext';

export const Page3: React.FC<{}> = () => {
  return (
    <PaperA4>
      <Leetcode />
      <Blog />
      <BlogPostCreator />
      <API />
      <NestNext />
    </PaperA4>
  );
};
