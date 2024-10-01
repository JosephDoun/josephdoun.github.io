---
layout: post
section-type: post
has-comments: true
title: Object-based Image Analysis for Land Cover mapping
category: GIS
tags: ["thesis", "gis", "image-analysis", "land-cover"]
---

As part of my studies in the School of Spatial Planning & Development
I authored the thesis [<i>"Land Cover Analysis using OBIA: a case study of
Oraiokastro, Chalkidona and Delta"</i>](https://ikee.lib.auth.gr/record/325115/)
, which I defended in 2020.

The term <i>Object-Based</i> in Image Analysis refers to the scientific notion
of analyzing an image in generally meaningful <i>chunks</i> or <i>pieces</i>
<i>(i.e. groups of pixels)</i>, by first <i>segmenting</i> it. Image segmentation
as a preprocessing step in image analysis was an almost natural evolution of
the classic pixel-based approach long before Convolutional Neural Networks
became accessible.

There are plenty of algorithms for segmenting an image
into meaningful objects, depending on the usecase, but they can be generalized
in two groups of strategies - <i>spectral</i> (or color) and <i>spatial</i>. 
The former refers to grouping pixels of similar color
(e.g. KMeans clustering), while
the latter refers to grouping according to certain shape or spatial relations
(e.g. image gridding, grouping pixels in $n \times n$ cells). In my thesis I
focused on a rather computationally expensive
algorithm developed by Trimble called <i>multiresolution segmentation</i>,
which tries to creatively combine these two aspects of image segmentation.

Multiresolution segmentation is an iterative algorithm that aims to build
image objects from the ground up according to color and shape rules until a
desired threshold is reached. This means that segmenting an image depends on
trial and error to find the optimal parameters. Specifically, the algorithm
defines two kinds of heterogeneity contained within the objects, one of color
and one of shape, and the only required parameter it needs to function is that
of <i>scale</i>. <i>Scale</i> is a scalar effectively describing the size of the
desired image objects to be generated, but in reality it is nothing more than the
average <i>heterogeneity</i> of the objects. Because of that, an appropriate
value for scale depends on the radiometry of a specific scene and is not
transferable to another. Starting from single pixels, this algorithm tries to
form objects following the criterion of maintaining object heterogeneity minimal
in every step throughout the scene.

An approximation of the merging criterion for a current object $c$ against an
$m$ amount of object candidates can be defined as follows:
$$\begin{align}
    &\textbf{Declare } \Delta H[m]; \\\\\\
    &\rule{110mm}{.4pt} \\\\\\
    &\textbf{for} \; i = 1 \; \textbf{to} \;m\; \textbf{do} \\\\\\
    &\hspace{5mm}\Delta h_i \quad\gets h_\text{merged}
    -
    (h_c + h_i)\\\\\\
    &\hspace{5mm}\Delta H[i] \gets \Delta h_i \\\\\\
    &candidate \gets \operatorname{argmin}\(\Delta H\) \\\\\\
    &\textbf{if} \operatorname{min}\(\Delta H\) < scale \\\\\\
    &\hspace{5mm}\operatorname{merge}\(candidate\)
\end{align}
$$

The color heterogeneity of the algorithm is defined as follows and it increases
with object size and contrast of contents:
$$\begin{align}
    &h_c = n \times \sigma \\\\\\
    \\\\\\
    &n: \text{number of object pixels} \\\\\\
    &\sigma: \text{standard deviation of pixel intensities}
\end{align}$$

The algorithm goes on to define an object shape heterogeneity that consists
of two components:
$$
\begin{align}
    &l : \text{object perimeter}\\\\\\
    &b : \text{perimeter of object's bounding box}\\\\\\
    &n : \text{size of object in pixels}\\\\\\
    &\rule{110mm}{.4pt} \\\\\\
    &compactness =\frac{l}{\sqrt{n}}& \\\\\\
    &smoothness = \frac{l}{b}& \\\\\\
    \\\\\\
    &h_s = \alpha \cdot compactness + (1 - \alpha) \cdot smoothness,& \alpha \in \[0, 1]
\end{align}
$$
The $compactness$ scalar aims to keep the perimeter length low relative to the
object size, while the $smoothness$ value keeps a low perimeter relative to the
bounding box. Both of those magnitudes keep the object's shape from deviating
quickly.

Finally, a weighted average of $h_c$ and $h_s$ is used as the criterion for
merging.
=======
I authored the thesis <i>"Land Cover Analysis using OBIA: a case study of
Oraiokastro, Chalkidona and Delta"</i>, which I defended in 2020.

The term <i>Object-Based</i> in Image Analysis refers to the scientific notion
of analyzing an image in generally meaningful <i>chunks</i> or <i>pieces</i>
<i>(i.e. groups of pixels)</i>, which was an almost natural evolution of the 
classical pixel-based approach long before Convolutional Neural Networks
became accessible.

There are plenty of approaches and algorithms for grouping pixels of an image
into meaningful groups, depending on the usecase. There are primarily two
ways in which you can group pixels of an image - spatially and spectrally.
Spatially, would mean to group pixels according to a certain spatial
relationship, <i>e.g. that are next to eachother</i>, while spectrally,
would mean to group pixels according to how similar they are in color.
The latter is pretty much what the KMeans clustering algorithm does,
while the simplest form of the former
can be splitting an image scene using a grid. Starting from the simplest
clustering algorithms <i>(e.g. KMeans)</i> or simple gridding of image scenes,
to complicated spectrospatial grouping algorithms, each approach can generate
unique additional features for the analysis of a scene.
In my thesis I focused on a rather computationally expensive algorithm developed
by Trimble called <i>multiresolution segmentation</i>, which tries to combine 
the best of both worlds.



