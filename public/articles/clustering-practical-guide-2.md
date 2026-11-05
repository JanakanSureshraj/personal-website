## 2. Partitioning Clustering

Partitioning methods divide (N) observations into a specified number (K)
of non-overlapping clusters.

### K-means

**K-means** assigns observations to the nearest centroid and iteratively
updates centroids to reduce the within-cluster sum of squares.

### Typical workflow

1. **Prepare the data.** Handle missing values and scale numeric features when they use different units or ranges.
2. **Choose candidate values for (K).** Common methods include the Elbow method, average silhouette score, and Gap Statistic.
3. **Fit the model.** Use multiple initializations to reduce the risk of a poor starting point.
4. **Compare candidate solutions.** Consider cluster compactness,

   separation, interpretability, and the needs of the task.
5. **Visualize the clusters.** Use cluster plots where possible. For high-dimensional data, a two-dimensional projection can help, but may not preserve every relationship.
6. **Validate the result.** Check whether the clusters are meaningful and stable for the intended use.

### Example in R

```r
set.seed(42)

k <- 3
kmeans_data <- kmeans(
  data_transform,
  centers = k,
  nstart = 25
)
```

Here, `data_transform` should contain the prepared numeric features,
`centers` sets the number of clusters, and `nstart` specifies how many
initial configurations to try. Choose `k` based on evaluation and the
problem context rather than copying the example value.

### Common evaluation measures

- **Within-cluster sum of squares (WSS):** Measures how tightly
observations are grouped around their cluster centroids. Lower
values indicate more compact clusters, but WSS generally decreases
as (K) increases.
- **Between-cluster sum of squares (BSS):** Measures variation between
cluster centroids and the overall data mean. Higher values can
indicate greater separation, but should be interpreted alongside the
chosen number of clusters and other metrics.
- **Silhouette score:** Considers both within-cluster cohesion and
separation from neighboring clusters.

## 3. Preprocessing and Dimensionality Reduction

Preprocessing can have a major effect on clustering results.

- **Scale features** when variables have different units or ranges,
especially for distance-based methods such as K-means.
- **Consider PCA** when data has many correlated features. Principal
Component Analysis can reduce dimensionality and support
visualization, but it is not guaranteed to improve clustering.
- **Evaluate the transformed data.** Scaling and dimensionality
reduction change distances and can affect the structure the
algorithm finds.

## Key Takeaways

- Hierarchical clustering builds a hierarchy that can be inspected
with a dendrogram.
- K-means requires the number of clusters (K) to be chosen in advance.
- No single metric proves that a clustering is optimal. Combine
quantitative measures with domain knowledge and interpretability.
- Preprocessing, distance measures, linkage choices, and
initialization can all influence the result.
