---
layout: home
profile_picture:
  src: /assets/img/Hpinkard_square.jpg
  alt: website picture
research: <ul><li><a href="#software">Software for microscope control</a></li><li><a href="#adaptivemicroscopy">Data-driven adaptive microscopy</a></li><li><a href="#singlecell">Single-cell computational microscopy</a></li></ul>  A full list of publications can be found on <a href="https://scholar.google.com/citations?user=-CpByXMAAAAJ&hl=en">Google Scholar</a>.

sections:
  - title: Software for microscope control
    link: software
    items:
      - title: Pycro-Manager
        image:
          src: /assets/img/work/pycromanager_banner.png
          alt: Pycro-Manager banner
        description: Pycro-Manager enables Python control of Micro-Manager (an open-source microscopy control software) as well as providing a simple interface for the development of customized experiments using complex, automated microscopes. It is built to handle the requirements of modern, data-intensive microscopy, and it provides capabilities for integrating real-time image processing for adaptive experiments. It is compatible with hundreds of microscope components and full microscopes. <br /> (<a href="https://pycro-manager.readthedocs.io/en/latest/">documentation</a>) (<a href="https://doi.org/10.1038">paper</a>) (<a href="https://github.com/micro-manager/pycro-manager">code</a>)

      - title: Micro-Magellan
        video:
          src: /assets/img/work/explore_square.mp4
          alt: Magellan explore acq
        description: Micro-Magellan is designed for imaging large samples that span multiple fields of view (e.g. 3D samples, whole slides, multi-well plates). It provides a graphical user interface for navigating around samples in X,Y, and Z and for defining and imaging arbitrarily shaped regions of interest. It is integrated with Pycro-manager, which enables hybrid GUI-code applications like manually controlling data acquisition through the while having custom Python code processing image data on-the-fly. <br /> (<a href="https://micro-manager.org/MicroMagellan">documentation</a>) (<a href="https://doi.org/10.1038/nmeth.3991">paper</a>) (<a href="https://github.com/micro-manager/micro-manager/tree/master/plugins/Magellan">code</a>)

  - title: Data-driven adaptive microscopy
    link: adaptivemicroscopy
    items:
      - title: Learned adaptive multiphoton illumination Microscopy
        video:
          src: /assets/img/work/LN_pan_square.mp4
          alt: Lymph_node_video
        description: Multiphoton microscopy is a powerful technique for deep in vivo imaging in scattering samples. However, it requires precise, sample-dependent increases in excitation power with depth in order to maintain signal while minimizing photodamage. We show that cells with identical fluorescent labels imaged in situ can be used to train a physics-based machine learning model that solves this problem. After this training has been performed, the correct illumination power can be predicted and adaptively adjusted at each point in a 3D volume on subsequent samples as a function of the sample’s shape, without the need for specialized fluorescent labelling. We use this technique for in vivo imaging of immune responses in mouse lymph nodes following vaccination, with imaging volumes 2 orders of magnitude larger than previously reported. We achieve visualization of physiologically realistic numbers of antigen-specific T cells for the first time, and demonstrate changes in the global organization and motility of dendritic cell networks during the early stages of the immune response. <br /> (<a href="https://doi.org/10.1038">paper</a>)  (<a href="https://pycro-manager.readthedocs.io/en/latest/application_notebooks/Learned_adaptive_multiphoton_illumination.html">tutorial</a>)  (<a href="https://doi.org/10.6084/m9.figshare.12841781">data</a>)

      - title: Deep Learning for single-shot autofocus microscopy
        video:
          src: /assets/img/work/focus.mp4
          alt: coherent focus
        description: Maintaining an in-focus image over long time scales is an essential and nontrivial task for a variety of microscopy applications. Here, we describe a fast, robust autofocusing method compatible with a wide range of existing microscopes. It requires only the addition of one or a few off-axis illumination sources (e.g., LEDs), and can predict the focus correction from a single image with this illumination. We designed a neural network architecture, the fully connected Fourier neural network (FCFNN), that exploits an understanding of the physics of the illumination to make accurate predictions with 2–3 orders of magnitude fewer learned parameters and less memory usage than existing state-of-the-art architectures, allowing it to be trained without any specialized hardware. This technique provides fast, inexpensive autofocus capabilities compatible with a variety of microscopes. <br /> (<a href="https://doi.org/10.1364/OPTICA.6.000794">paper</a>) (<a href="https://pycro-manager.readthedocs.io/en/latest/application_notebooks/Single_shot_autofocus_pycromanager.html">tutorial</a>) (<a href="https://github.com/henrypinkard/DeepAutofocus">code</a>)


  - title: Single-cell computational microscopy (Coming soon...)
    link: singlecell
    items:
      - title: Berkeley single-cell computational microscopy (BSCCM) dataset
        image: 
          src: /assets/img/work/cell_montage.png
          alt: Cell montage
        description: A deep learning-sized dataset of single white blood cells under a variety of illumination conditions. Coming soon...
    
---


<p>I am a Ph.D. student in <a href="https://ccb.berkeley.edu/academics/phd-in-computational-biology/" >Computational Biology</a> at UC Berkeley, where I work in the <a href="http://www.laurawaller.com/">Computational Imaging Lab</a> with Prof. Laura Waller in the <a href="https://eecs.berkeley.edu/">Department of Electrical Engineering and Computer Sciences.</a> I am also the founder of Photomics, Inc.
	<!-- <a href="https://photomics.ai/">Photomics, Inc.</a>  -->
</p> 

<p>My research is focused on the design of hardware, software, and algorithms for new types of data-driven microscopes. As a result, I work at the intersection of many fields, including optical physics, machine learning, single-cell biology, immunology, software engineering, data science, computer vision, and information theory. More details can be found in the <a href="https://henrypinkard.github.io#research">research</a> section.

<p>
Before coming to UC Berkeley, I spent 3 years at the UCSF <a href="https://bidc.ucsf.edu/">Biological Imaging Development Center</a> with Prof. Matthew Krummel, where I built and programmed microscopes and did research on the immune system. Before that, I worked in <a href="https://valelab.ucsf.edu/">Prof. Ron Vale's lab</a> at UCSF where I helped develop an open source software for microscope control called <a href="https://micro-manager.org/wiki/Micro-Manager_Open_Source_Microscopy_Software">Micro-Manager</a>, which I've continued working on in the decade since.</p> 


<p>My graduate work has been funded by fellowships from the <a href="https://bids.berkeley.edu/">Berkeley Institute for Data Science</a>, the <a href="https://bakarinstitute.ucsf.edu/">UCSF Bakar Computational Health Sciences Institute</a>, and the <a href="https://www.nsf.gov/">NSF</a>. 





