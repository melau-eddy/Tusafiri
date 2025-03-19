'use client';
import { Fragment } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from './ui/breadcrumb';

type BreadCrumbsProps = {
  path: Array<string>;
};
export default function NavigationBreadCrumbs({ path }: BreadCrumbsProps) {
  const buildBreadcrumbPath = (path: string[], index: number) => {
    const fullPath = path.slice(0, index + 1).join('/');
    return `/${fullPath}`;
  };
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className=" hover:text-foreground hover:underline" href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        {path.length > 0 && <BreadcrumbSeparator />}
        {path.map((item, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="hover:text-accent-foreground hover:underline"
                href={buildBreadcrumbPath(path, index)}
              >
                {item}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < path.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
