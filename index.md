---
layout: home
profile_picture:
  src: /assets/img/HP_shot_large.jpg
  alt: website picture

sections:

  - title: Information-theoretic design
    link: infotheory
    items:
      - title: Information-driven design of imaging systems
        video:
          src: /assets/img/work/ideal.mp4
          alt: Encoding info
        description:  'A method to measure and optimize how much information imaging systems capture, applicable to diverse systems ranging from consumer cameras to radio telescopes observing black holes.  <br />(<a href="https://waller-lab.github.io/EncodingInformationWebsite/">website</a>)  (<a href="https://doi.org/10.48550/arXiv.2405.20559">pre-print</a>)  (<a href="https://github.com/Waller-Lab/EncodingInformation">code</a>)'


      - title: A visual introduction to information theory
        image:
          src: /assets/img/work/extended_noisy_channel.png
          alt: Extended channel
        description: A practical introduction to the fundamentals of information theory, describing concepts such as data compression and accurate transmission of messages in the presence of noise.  <br /> (<a href="https://doi.org/10.48550/arXiv.2206.07867">paper</a>)  (<a href="https://doi.org/10.5281/zenodo.6647779">code+figures</a>)


  - title: Computational microscopy 
    link: compmicroscopy
    items:
      - title: The Berkeley single-cell computational microscopy (BSCCM) dataset
        video: 
          src: /assets/img/work/bsccm_montage.mp4
          alt: Cell montage
        description: contains over >400k images of white blood cells under varied LED illumination patterns, paired with protein expression measurements. It provides standardized training data for computational imaging and vision algorithms with biomedical applications. <br /> (<a href="https://waller-lab.github.io/BSCCM/">website</a>)
      - title: Microscopes are coming for your job
        image:
          src: /assets/img/work/adaptive_dgm.png
          alt: adaptive_deep_generative_model_microscope
        description: Speculating about the future possibilities agentic artificial intelligence and reinforcement learning in microscopy. <br /> (<a href="https://rdcu.be/cVdty">paper</a>) 

      - title: Learned adaptive multiphoton illumination microscopy
        video:
          src: /assets/img/work/LN.mp4
          alt: Lymph_node_video
        description: A technique where a neural network dynamically adjusts multiphoton microscope laser power during scanning, enabling immune cell imaging at previously impossible scales. This allows observation of T cell and dendritic cell organization during early immune responses. <br /> (<a href="https://doi.org/10.1038/s41467-021-22246-5">paper</a>)  (<a href="https://pycro-manager.readthedocs.io/en/latest/application_notebooks/Learned_adaptive_multiphoton_illumination.html">tutorial</a>)  (<a href="https://doi.org/10.6084/m9.figshare.12841781">data</a>)

      - title: Deep learning for single-shot autofocus microscopy
        video:
          src: /assets/img/work/focus.mp4
          alt: coherent focus
        description: A fast autofocusing technique combining custom illumination patterns with a physics-based neural architecture to predict focus corrections from single images. Requires far fewer parameters than standard networks while maintaining accuracy. <br /> (<a href="https://doi.org/10.1364/OPTICA.6.000794">paper</a>) (<a href="https://pycro-manager.readthedocs.io/en/latest/application_notebooks/Single_shot_autofocus_pycromanager.html">tutorial</a>) (<a href="https://github.com/henrypinkard/DeepAutofocus">code</a>)


  - title: Open-source software
    link: software
    items:
      - title: Pycro-Manager
        image:
          src: /assets/img/work/pycromanager_banner.png
          alt: Pycro-Manager banner
        description: An open-source Python package for controlling microscopes, enabling automated experiments and real-time adaptive imaging. Works with hundreds of microscope components and handles large-scale data acquisition. <br /> (<a href="https://pycro-manager.readthedocs.io/en/latest/">documentation</a>) (<a href="https://doi.org/10.1038/s41592-021-01087-6">paper</a>) (<a href="https://github.com/micro-manager/pycro-manager">code</a>)

      - title: Micro-Magellan
        video:
          src: ./assets/img/work/explore_square.mp4
          alt: Magellan explore acq
        description: A microscopy acquisition software for defining and imaging arbitrary three-dimensional regions in large samples like tissue slides and multi-well plates. Enables simultaneous graphical control and Python-based image processing during acquisition. <br /> (<a href="https://micro-manager.org/MicroMagellan">documentation</a>) (<a href="https://doi.org/10.1038/nmeth.3991">paper</a>) (<a href="https://github.com/micro-manager/micro-manager/tree/master/plugins/Magellan">code</a>)

---

I'm a postdoctoral researcher in the <a href="http://www.laurawaller.com/">Computational Imaging Lab</a> at UC Berkeley, within the department of Electrical Engineering and Computer Sciences and the <a href="https://bair.berkeley.edu/">Berkeley AI Research Lab</a>. I received my PhD (<a href="https://ccb.berkeley.edu/academics/phd-in-computational-biology/" >Computational Biology</a>) and MS (<a href="https://eecs.berkeley.edu/">EECS</a>) here, advised by Laura Waller.


<p>My research focuses on using information theory and machine learning to design better imaging systems. Before coming to Berkeley, I worked in the UCSF <a href="https://bidc.ucsf.edu/">Biological Imaging Development Center</a>, where I did immunology research and built and programmed microscopes. I also helped create and maintain <a href="https://micro-manager.org/wiki/Micro-Manager_Open_Source_Microscopy_Software">Micro-Manager</a>, an open-source software for the control of microscopes.

