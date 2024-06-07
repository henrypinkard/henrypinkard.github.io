---
layout: home
profile_picture:
  src: /assets/img/HP_shot_large.jpg
  alt: website picture
research: <ul><li><a href="#infotheory">Information theory and imaging</a></li><li><a href="#singlecell">Open data for computational microscopy</a></li><li><a href="#adaptivemicroscopy">Data-driven adaptive microscopy</a></li><li><a href="#software">Software for microscope control</a></li></ul>  A full list of publications can be found on <a href="https://scholar.google.com/citations?user=-CpByXMAAAAJ&hl=en">Google Scholar</a>.

sections:

  - title: Information theory and imaging
    link: infotheory
    items:
      - title: Universal evaluation and design of imaging systems using information estimation
        video:
          src: /assets/img/work/encoding-info.mp4
          alt: Encoding info
        description:  Information theory, which describes the transmission of signals in the presence of noise, has enabled the development of reliable communication systems that underlie the modern world. Imaging systems can also be viewed as a form of communication, in which information about the object is "transmitted" through images. In this work, we develop the mathematical foundations needed to use information theory to analyze and design imaging systems. This enables estimation of the information content of measurements, regardless of how that information is encoded. This framework is applicable to systems spanning traditional designs, nontraditional systems that produce non human interpretable measurements, and those leveraging machine learning to decode complex measurements. It provides a powerful tool for both understanding fundamental performance limits and optimizing imaging hardware to maximize captured information. <br /> (<a href="https://doi.org/10.48550/arXiv.2405.20559">pre-print</a>)  (<a href="https://github.com/Waller-Lab/EncodingInformation">code</a>)


      - title: A visual introduction to information theory
        image:
          src: /assets/img/work/extended_noisy_channel.png
          alt: Extended channel
        description: The mathematical tools of information theory can be used to characterize the fundamental limits of data compression and accurate transmission of messages in the presence of noise. This paper presents a practical guide to key concepts in information theory, focusing on intuitions and providing visual explanations wherever possible. The only background required is familiarity with basic probability theory.  <br /> (<a href="https://doi.org/10.48550/arXiv.2206.07867">paper</a>)  (<a href="https://doi.org/10.5281/zenodo.6647779">code+figures</a>)

  - title: Open data for computational microscopy 
    link: singlecell
    items:
      - title: The Berkeley single-cell computational microscopy (BSCCM) dataset
        video: 
          src: /assets/img/work/bsccm_montage.mp4
          alt: Cell montage
        description: contains over 400,000 images of white blood cells with diverse illumination patterns on an LED array microscope, as well as fluorescent measurements of the abundance of surface proteins that mark different cell types. It is designed to serve as a resource for the development and testing of new algorithms in computational microscopy and computer vision with practical biomedical applications. (<a href="https://waller-lab.github.io/BSCCM/">website</a>)


  - title: Data-driven adaptive microscopy
    link: adaptivemicroscopy
    items:
      - title: Microscopes are coming for your job
        image:
          src: /assets/img/work/adaptive_dgm.png
          alt: adaptive_deep_generative_model_microscope
        description: Speculating about the future possibilities of microscopes controlled by machine learning algorithms. <br /> (<a href="https://rdcu.be/cVdty">paper</a>) 

      - title: Learned adaptive multiphoton illumination microscopy
        video:
          src: /assets/img/work/LN.mp4
          alt: Lymph_node_video
        description: Multiphoton microscopes excel in imaging dynamic biological processes within living tissues. However, the high-powered lasers that generate fluorescent signals in this method also pose a risk of cellular damage. Striking a balance between sufficient signal and minimal harm is challenging due to varying optical properties across different sample areas. In this work, we show how to use a neural network to dynamically adjust laser power in real time, tailored to different regions of the sample. This approach enabled us to monitor immune cells over significantly larger areas than previously possible, yielding novel insights into the organization and movement of immune cells like T cells and dendritic cells during the initial phase of an immune response.


         <br /> (<a href="https://doi.org/10.1038/s41467-021-22246-5">paper</a>)  (<a href="https://pycro-manager.readthedocs.io/en/latest/application_notebooks/Learned_adaptive_multiphoton_illumination.html">tutorial</a>)  (<a href="https://doi.org/10.6084/m9.figshare.12841781">data</a>)

      - title: Deep learning for single-shot autofocus microscopy
        video:
          src: /assets/img/work/focus.mp4
          alt: coherent focus
        description: We introduce a fast and robust autofocusing method for microscopes, requiring only additional off-axis illumination sources like LEDs. Our technique utilizes a novel physics-based neural network architecture, the Fully Connected Fourier Neural Network (FCFNN), which efficiently predicts focus corrections from a single image and requires significantly fewer parameters and less memory than other types of neural networks. This approach offers an accessible and efficient solution for maintaining focus in microscopy applications. <br /> (<a href="https://doi.org/10.1364/OPTICA.6.000794">paper</a>) (<a href="https://pycro-manager.readthedocs.io/en/latest/application_notebooks/Single_shot_autofocus_pycromanager.html">tutorial</a>) (<a href="https://github.com/henrypinkard/DeepAutofocus">code</a>)


  - title: Software for microscope control
    link: software
    items:
      - title: Pycro-Manager
        image:
          src: /assets/img/work/pycromanager_banner.png
          alt: Pycro-Manager banner
        description: Pycro-Manager enables Python control of Micro-Manager (an open-source microscopy control software) as well as providing a simple interface for the development of customized experiments using complex, automated microscopes. It is built to handle the requirements of modern, data-intensive microscopy, and it provides capabilities for integrating real-time image processing for adaptive experiments. It is compatible with hundreds of microscope components and full microscopes. <br /> (<a href="https://pycro-manager.readthedocs.io/en/latest/">documentation</a>) (<a href="https://doi.org/10.1038/s41592-021-01087-6">paper</a>) (<a href="https://github.com/micro-manager/pycro-manager">code</a>)

      - title: Micro-Magellan
        video:
          src: ./assets/img/work/explore_square.mp4
          alt: Magellan explore acq
        description: Micro-Magellan is designed for imaging large samples that span multiple fields of view (e.g. 3D samples, whole slides, multi-well plates). It provides a graphical user interface for navigating around samples in X,Y, and Z and for defining and imaging arbitrarily shaped regions of interest. It is integrated with Pycro-manager, which enables hybrid GUI-code applications like manually controlling data acquisition through the Magellan GUI while having custom Python code processing image data on-the-fly. <br /> (<a href="https://micro-manager.org/MicroMagellan">documentation</a>) (<a href="https://doi.org/10.1038/nmeth.3991">paper</a>) (<a href="https://github.com/micro-manager/micro-manager/tree/master/plugins/Magellan">code</a>)

      # - title: Micro-Manager Core
      #   image:
      #     src: /assets/img/work/mmcore.png
      #     alt: MMCore architecture
      #   description: Micro-Manager is open-source software for operation of automated microscopes. The Core module in Micro-Manager is a hardware device abstraction layer that enables the same code to operate many different hardware devices with no changes. Because of the great number of devices now supported by this software layer and the tantalizing potential to use this code under many more conditions, here we review the original software design and identify possible improvements to enable its future use under a wider variety of circumstances
      #    (<a href="/assets/pdf/MMCoreDesign.pdf">paper</a>)
---


<p>I am a postdoctoral researcher at UC Berkeley in the <a href="http://www.laurawaller.com/">Computational Imaging Lab</a> with Prof. Laura Waller in the <a href="https://eecs.berkeley.edu/">Department of Electrical Engineering and Computer Sciences</a>, where I received my PhD in <a href="https://ccb.berkeley.edu/academics/phd-in-computational-biology/" >Computational Biology</a> and MS in Electrical Engineering and Computer Sciences.
</p> 

<p>My research has focused on the design of hardware, software, algorithms, and theory for imaging systems, particularly optical microscopes. Some of my recent areas of interest include information theory, optical physics, machine learning, single-cell biology, immunology, software engineering, and computer vision. More details can be found in the <a href="https://henrypinkard.github.io#research">research</a> section.

<p>
Before coming to UC Berkeley, I spent 3 years at the UCSF <a href="https://bidc.ucsf.edu/">Biological Imaging Development Center</a> with Prof. Matthew Krummel, where I built and programmed microscopes and did research on the immune system. Before that, I worked in <a href="https://valelab.ucsf.edu/">Prof. Ron Vale's lab</a> at UCSF where I helped develop an open source software for microscope control called <a href="https://micro-manager.org/wiki/Micro-Manager_Open_Source_Microscopy_Software">Micro-Manager</a> that I continue to work on.</p> 


<p>My graduate work was funded by fellowships from the <a href="https://bids.berkeley.edu/">Berkeley Institute for Data Science</a>, the <a href="https://bakarinstitute.ucsf.edu/">UCSF Bakar Computational Health Sciences Institute</a>, and the <a href="https://www.nsf.gov/">NSF</a>. 





