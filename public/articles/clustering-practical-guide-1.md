Clustering is an **unsupervised learning** technique that groups data
points based on similarity, without using predefined labels.

This note is part 1 of the two common approaches: hierarchical clustering and
partitioning clustering.

## 1. Hierarchical Clustering

Hierarchical clustering builds a tree of nested clusters. Its result is
commonly visualized as a **dendrogram**.

### Main approaches

- **Agglomerative (bottom-up):** Start with each observation as its
own cluster. Repeatedly merge the closest clusters until all
observations belong to one cluster.
- **Divisive (top-down):** Start with all observations in one cluster.
Repeatedly split clusters until each observation forms its own
cluster, or another stopping condition is met.

### Typical workflow

1. **Prepare the data.** Handle missing values and scale features when their ranges differ substantially.
2. **Choose a distance measure.** Euclidean distance is common for  numeric data, but the choice should fit the data and problem.
3. **Choose a linkage method.** For example, single, complete, average, or Ward's linkage. The method determines how distances between clusters are calculated.
4. **Build the hierarchy.** Merge or split clusters according to the chosen approach.
5. **Inspect the dendrogram.** Cut the tree at a selected height to obtain a chosen number of clusters.
6. **Evaluate the result.** Use measures such as the silhouette score. Cophenetic correlation can help assess how well the dendrogram preserves the original pairwise distances; a value closer to 1 indicates a stronger correlation.

### Evaluating and visualizing clusters

- **Silhouette score:** Measures how well each observation fits its
assigned cluster compared with neighboring clusters. Scores range
from -1 to +1:
  - Near **+1**: the observation is well matched to its cluster.
  - Near **0**: the observation lies near a cluster boundary.
  - Below **0**: the observation may fit another cluster better.
  This can indicate a possible assignment issue, but does not
  automatically mean the observation is an outlier.
- **Dendrogram:** Shows the sequence and relative distances of cluster
merges or splits.
- **Silhouette plot:** Shows silhouette scores for observations and
clusters.