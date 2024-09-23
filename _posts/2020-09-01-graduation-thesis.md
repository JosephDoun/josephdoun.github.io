---
layout: post
section-type: post
has-comments: true
title: Object-based Image Analysis for Land Cover mapping
category: GIS
tags: ["thesis", "gis", "image-analysis", "land-cover"]
---

As part of my studies in the School of Spatial Planning & Development
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




