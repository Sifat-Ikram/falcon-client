"use client";
import { useState, useEffect } from "react";
import useAxiosPublic from "./useAxiosPublic";

export function useFetchTaskById(productId, refreshTrigger = 0) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (!productId) return;
    setLoading(true);
    axiosPublic
      .get(`/product/${productId}`)
      .then((res) => setProduct(res.data))
      .catch((err) => setError(err.message || "Error fetching product"))
      .finally(() => setLoading(false));
  }, [productId, refreshTrigger, axiosPublic]);

  return { product, loading, error };
}
