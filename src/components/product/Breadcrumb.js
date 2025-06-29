import Link from "next/link";
import { useCategories } from "../hooks/useCategories";

export default function Breadcrumb({ product }) {
  const { categories, loading, error } = useCategories();

  if (loading) return <p>Loading breadcrumbs...</p>;
  if (error) return <p>Error loading categories</p>;

  // Find category by product.category_id
  const category = categories.find((cat) => cat.id === product.category_id);

  // Find subcategory if category and sub_category_id exist
  const subcategory = category?.subcategories.find(
    (sub) => sub.id === product.sub_category_id
  );

  // Find subchild if subcategory and sub_category_child_id exist
  const subchild = subcategory?.subchilds.find(
    (child) => child.id === product.sub_category_child_id
  );

  return (
    <nav className="text-sm text-gray-600" aria-label="breadcrumb">
      <ol className="list-reset flex flex-wrap">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>

        {category && (
          <>
            <li className="mx-2">/</li>
            <li>{category.name}</li>
          </>
        )}

        {subcategory && (
          <>
            <li className="mx-2">/</li>
            <li>{subcategory.name}</li>
          </>
        )}

        {subchild && (
          <>
            <li className="mx-2">/</li>
            <li>{subchild.name}</li>
          </>
        )}
      </ol>
    </nav>
  );
}
