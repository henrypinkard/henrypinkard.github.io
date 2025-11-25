---
layout: home
profile_picture:
  src: /assets/img/HP_square_crop.png
  alt: Headshot

sections:
  - title: Research
    items:
      - title: Information-driven design of imaging systems
        video:
          src: /assets/img/work/info_driven_design_video_abstract.mp4
          alt: Encoding info
        authors: "Henry Pinkard, Leyla Kabuli, Eric Markley, Tiffany Chien, Jiantao Jiao, Laura Waller"
        venue: "NeurIPS 2025"
        venue_url: https://neurips.cc/virtual/2025/loc/san-diego/poster/118055
        links:
          - text: website
            url: https://waller-lab.github.io/EncodingInformationWebsite/
          - text: paper
            url: https://doi.org/10.48550/arXiv.2405.20559
          - text: code
            url: https://github.com/Waller-Lab/EncodingInformation
        description: 'A method to design imaging systems that capture maximum information for AI, free from human perceptual constraints. Applicable to diverse systems from consumer cameras to radio telescopes imaging black holes.'

      - title: ARC-AGI-2 - A new challenge for frontier AI reasoning systems
        image:
          src: /assets/img/work/arc2.png
          alt: ARC-AGI-2
        authors: "François Chollet, Mike Knoop, Gregory Kamradt, Bryan Landers, Henry Pinkard"
        venue: "2025"
        links:
          - text: website
            url: https://arcprize.org/arc-agi/2/
          - text: paper
            url: https://arxiv.org/html/2505.11831v1
        description: 'A benchmark for testing fluid intelligence and compositional reasoning in AI systems. Tests symbolic interpretation, multi-step reasoning, and contextual understanding beyond pattern matching.'

      - title: The Berkeley single-cell computational microscopy (BSCCM) dataset
        video: 
          src: /assets/img/work/bsccm_montage.mp4
          alt: Cell montage
        authors: "Henry Pinkard, Cherry Liu, Fanice Nyatigo, Daniel A. Fletcher, Laura Waller"
        venue: "2024"
        links:
          - text: website
            url: https://waller-lab.github.io/BSCCM/
          - text: paper
            url: https://arxiv.org/abs/2402.06191
          - text: code
            url: https://github.com/Waller-Lab/BSCCM
        description: 'A 12-million-image biomedical computer vision benchmark with images of white blood cells under varied illumination, paired with protein expression labels.'

      - title: "Pycro-Manager: open-source microscope control software"
        image:
          src: /assets/img/work/pycromanager_banner.png
          alt: Pycro-Manager banner
        authors: "Henry Pinkard, Nico Stuurman, Ivan E. Ivanov, Nicholas M. Anthony, Wei Ouyang, Bin Li, Bin Yang, Mark A. Tsuchida, Bryant Chhun, Grace Zhang, Ryan Mei, Michael Anderson, Douglas P. Shepherd, Ian Hunt-Isaak, Raymond L. Dunn, Wiebke Jahr, Saul Kato, Loïc A. Royer, Jay R. Thiagarajah, Kevin W. Eliceiri, Emma Lundberg, Shalin B. Mehta, Laura Waller"
        venue: "Nature Methods 2021"
        venue_url: https://doi.org/10.1038/s41592-021-01087-6
        links:
          - text: documentation
            url: https://pycro-manager.readthedocs.io/en/latest/
          - text: paper
            url: https://doi.org/10.1038/s41592-021-01087-6
          - text: code
            url: https://github.com/micro-manager/pycro-manager
        description: 'Open-source Python package for microscope control, enabling automated experiments and real-time adaptive imaging. Works with hundreds of hardware components and handles terabyte-scale data acquisition.'

      - title: Learned adaptive multiphoton illumination microscopy
        video:
          src: /assets/img/work/LN.mp4
          alt: Lymph_node_video
        authors: "Henry Pinkard, Hratch Baghdassarian, Adriana Mujal, Ed Roberts, Kenneth H. Hu, Daniel Haim Friedman, Ivana Malenica, Taylor Shagam, Adam Fries, Kaitlin Corbin, Matthew F. Krummel, Laura Waller"
        venue: "Nature Communications 2021"
        venue_url: https://doi.org/10.1038/s41467-021-22246-5
        links:
          - text: paper
            url: https://doi.org/10.1038/s41467-021-22246-5
          - text: tutorial
            url: https://pycro-manager.readthedocs.io/en/latest/application_notebooks/Learned_adaptive_multiphoton_illumination.html
          - text: data
            url: https://doi.org/10.6084/m9.figshare.12841781
        description: 'Physics-informed neural networks that learn to compensate for optical scattering by dynamically adjusting laser power during scanning, enabling immune cell imaging at previously impossible depths in living tissue.'

      - title: Deep learning for single-shot autofocus microscopy
        video:
          src: /assets/img/work/focus.mp4
          alt: coherent focus
        authors: "Henry Pinkard, Zachary Phillips, Arman Babakhani, Daniel A. Fletcher, Laura Waller"
        venue: "Optica 2019"
        venue_url: https://doi.org/10.1364/OPTICA.6.000794
        links:
          - text: paper
            url: https://doi.org/10.1364/OPTICA.6.000794
          - text: tutorial
            url: https://pycro-manager.readthedocs.io/en/latest/application_notebooks/Single_shot_autofocus_pycromanager.html
          - text: code
            url: https://github.com/henrypinkard/DeepAutofocus
        description: 'Physics-informed neural network architecture that predicts focus corrections from single images using custom illumination patterns, reducing parameters by 100× while maintaining accuracy.'

  - title: Additional Publications
    items:
      - title: Information-theoretic Bayesian optimization of imaging systems
        image:
          src: /assets/img/work/bayesian_optimization_diagram.png
          alt: Bayesian optimization
        authors: "Leyla A. Kabuli, Nalini M. Singh, Henry Pinkard, Laura Waller"
        venue: "Optica COSI 2025"
        links:
          - text: website
            url: https://lakabuli.github.io/posts/bayesian_information_optimization.html
        description: 'Black-box framework for designing imaging systems using Bayesian optimization and mutual information, requiring neither forward models nor ground truth data.'

      - title: Computationally efficient information-driven optical design with interchanging optimization
        image:
          src: /assets/img/work/idealio_highlight.png
          alt: Interchanging optimization
        authors: "Eric Markley, Henry Pinkard, Leyla Kabuli, Nalini Singh, Laura Waller"
        venue: "2025"
        venue_url: https://www.arxiv.org/abs/2507.07789
        links:
          - text: paper
            url: https://www.arxiv.org/abs/2507.07789
        description: 'An application-agnostic optical design method with reduced runtime and memory for information-theoretic optimization of imaging systems.'

      - title: Designing lensless imaging systems to maximize information capture
        image:
          src: /assets/img/work/lensinfo_highlight.png
          alt: Lensless info design
        authors: "Leyla A. Kabuli, Henry Pinkard, Eric Markley, Clara S. Hung, Laura Waller"
        venue: "2025"
        venue_url: https://arxiv.org/abs/2506.08513
        links:
          - text: paper
            url: https://arxiv.org/abs/2506.08513
        description: 'Mutual information-based evaluation and design of lensless imaging systems, establishing principles for object-dependent imaging.'

      - title: Neural network-based dark-field differential phase contrast microscopy
        image:
          src: /assets/img/work/Fard2025.png
          alt: Neural network DPC microscopy
        authors: "Zahra Khodabakhshi Fard, Henry Pinkard, Laura Waller"
        venue: "SPIE BiOS 2025"
        venue_url: https://doi.org/10.1117/12.3043897
        links:
          - text: paper
            url: https://doi.org/10.1117/12.3043897
        description: 'Fast quantitative phase imaging method achieving high resolution with fewer images than traditional approaches.'


      - title: Information-theoretic design for high-dimensional computational imaging
        image:
          src: /assets/img/work/infodesign_highlight.png
          alt: High-dimensional design
        authors: "Eric Markley, Leyla Kabuli, Tiffany Chien, Henry Pinkard, Laura Waller"
        venue: "Optica COSI 2024"
        links: []
        description: 'A technique for information-theoretic optimization of computational imaging systems with high-dimensional design spaces.'

      - title: Information-theoretic experimental analysis of lensless imagers
        image:
          src: /assets/img/work/lensless_info_design.png
          alt: Lensless imager analysis
        authors: "Leyla A. Kabuli, Clara S. Hung, Eric Markley, Henry Pinkard, Laura Waller"
        venue: "Optica COSI 2024"
        links: []
        description: 'Analysis of information content in experimental lensless cameras showing that mutual information predicts reconstruction quality without performing reconstruction.'

      - title: Microscopes are coming for your job
        image:
          src: /assets/img/work/adaptive_dgm.png
          alt: adaptive_deep_generative_model_microscope
        authors: "Henry Pinkard, Laura Waller"
        venue: "Nature Methods 2022"
        venue_url: https://rdcu.be/cVdty
        links: 
          - text: paper
            url: https://rdcu.be/cVdty
        description: 'Perspective on future possibilities for agentic AI and reinforcement learning in automated scientific discovery.'

      - title: A visual introduction to information theory
        image:
          src: /assets/img/work/extended_noisy_channel.png
          alt: Extended channel
        authors: "Henry Pinkard, Laura Waller"
        venue: "2022"
        venue_url: https://doi.org/10.48550/arXiv.2206.07867
        links:
          - text: paper
            url: https://doi.org/10.48550/arXiv.2206.07867
          - text: code+figures
            url: https://doi.org/10.5281/zenodo.6647779
        description: 'Tutorial on information theory for machine learning practitioners, covering data compression and transmission in noisy channels.'

      - title: Image denoising for fluorescence microscopy by supervised to self-supervised transfer learning
        image:
          src: /assets/img/work/wang_optics_express2021.jpg
          alt: Microscopy image denoising
        authors: "Yina Wang, Henry Pinkard, Emaad Khwaja, Shuqin Zhou, Laura Waller, Bo Huang"
        venue: "Optics Express 2021"
        venue_url: https://doi.org/10.1364/OE.434191
        links:
          - text: paper
            url: https://doi.org/10.1364/OE.434191
        description: 'Deep learning method for removing noise from microscopy images without requiring matched training data.'

      - title: The Microscope Device Abstraction Layer of Micro-Manager
        image:
          src: /assets/img/work/amodaj_mmcore_2021.png
          alt: Micro-Manager device abstraction
        authors: "Nenad Amodaj, Henry Pinkard, Nick Anthony, Nico Stuurman"
        venue: "2021"
        links:
          - text: paper
            url: /assets/pdf/MMCoreDesign.pdf
        description: 'Software architecture enabling control of thousands of microscope devices through a unified interface.'

      - title: Quantitative Clonal Analysis and Single-Cell Transcriptomics Reveal Division Kinetics, Hierarchy, and Fate of Oral Epithelial Progenitor Cells
        image:
          src: /assets/img/work/Jones2019.png
          alt: Oral epithelial cell analysis
        authors: "Kyle B. Jones, Sachiko Furukawa, Pauline Marangoni, Hongfang Ma, Henry Pinkard, Rebecca D'Urso, Rapolas Zilionis, Allon M. Klein, Ophir D. Klein"
        venue: "Cell Stem Cell 2019"
        venue_url: https://doi.org/10.1016/j.stem.2018.10.015
        links:
          - text: paper
            url: https://doi.org/10.1016/j.stem.2018.10.015
        description: 'Single-cell analysis revealing the organization and dynamics of oral tissue stem cells.'

      - title: Micro-Magellan
        video:
          src: ./assets/img/work/explore_square.mp4
          alt: Magellan explore acq
        authors: "Henry Pinkard, Nico Stuurman, Kaitlin Corbin, Ronald Vale, Matthew F. Krummel"
        venue: "Nature Methods 2016"
        venue_url: https://doi.org/10.1038/nmeth.3991
        links:
          - text: documentation
            url: https://micro-manager.org/MicroMagellan
          - text: paper
            url: https://doi.org/10.1038/nmeth.3991
          - text: code
            url: https://github.com/micro-manager/micro-manager/tree/master/plugins/Magellan
        description: 'Software for automated 3D imaging of large biological samples.'

      - title: Tracking the Spatial and Functional Gradient of Monocyte-To-Macrophage Differentiation in Inflamed Lung
        image:
          src: /assets/img/work/Sen2016.png
          alt: Monocyte differentiation tracking
        authors: "Debasish Sen, Stephen M. Jones, Erin M. Oswald, Henry Pinkard, Kaitlin Corbin, Matthew F. Krummel"
        venue: "PLOS ONE 2016"
        venue_url: https://doi.org/10.1371/journal.pone.0165064
        links:
          - text: paper
            url: https://doi.org/10.1371/journal.pone.0165064
        description: 'Imaging technique for tracking immune cell development in inflamed tissue.'

      - title: Spatiotemporal Rank Filtering Improves Image Quality Compared to Frame Averaging in 2-Photon Laser Scanning Microscopy
        image:
          src: /assets/img/work/pinkard_2016.png
          alt: Spatiotemporal rank filtering
        authors: "Henry Pinkard, Kaitlin Corbin, Matthew F. Krummel"
        venue: "PLOS ONE 2016"
        venue_url: https://doi.org/10.1371/journal.pone.0150430
        links:
          - text: paper
            url: https://doi.org/10.1371/journal.pone.0150430
        description: 'Computational method for improving microscope image quality while reducing exposure time.'

      - title: Assessing and benchmarking multiphoton microscopes for biologists
        image:
          src: /assets/img/work/Corbin2017.png
          alt: Multiphoton microscope benchmarking
        authors: "Kaitlin Corbin, Henry Pinkard, Sebastian Peck, Peter Beemiller, Matthew F. Krummel"
        venue: "Methods in Cell Biology 2014"
        venue_url: https://doi.org/10.1016/B978-0-12-420138-5.00008-2
        links:
          - text: paper
            url: https://doi.org/10.1016/B978-0-12-420138-5.00008-2
        description: 'Guidelines for evaluating and optimizing multiphoton microscope performance for biological imaging.'

      - title: Advanced methods of microscope control using μManager software
        image:
          src: /assets/img/work/edelstein_2016.jpg
          alt: μManager software
        authors: "Arthur D. Edelstein, Mark A. Tsuchida, Nenad Amodaj, Henry Pinkard, Ronald D. Vale, Nico Stuurman"
        venue: "Journal of Biological Methods 2014"
        venue_url: https://doi.org/10.14440/jbm.2014.36
        links:
          - text: paper
            url: https://doi.org/10.14440/jbm.2014.36
        description: 'Open-source software platform for controlling automated microscopes and coordinating complex imaging experiments.'

      - title: "Limb phase flexibility in walking: a test case in the squirrel monkey (Saimiri sciureus)"
        image:
          src: /assets/img/work/miller_2019_limb_phase_flexibility.png
          alt: Squirrel monkey gait analysis
        authors: "Charlotte E. Miller, Laura E. Johnson, Henry Pinkard, Pierre Lemelin, Daniel Schmitt"
        venue: "Frontiers in Zoology 2019"
        venue_url: https://doi.org/10.1186/s12983-019-0299-8
        links:
          - text: paper
            url: https://doi.org/10.1186/s12983-019-0299-8
        description: 'Model for predicting quadrupedal gait selection based on energy efficiency and balance requirements.'

      - title: Pitch control and speed limitation during overground deceleration in lemurid primates
        image:
          src: /assets/img/work/miller_2019_pitch.png
          alt: Lemur deceleration mechanics
        authors: "Charlotte E. Miller, Henry Pinkard, Laura E. Johnson, Daniel Schmitt"
        venue: "Journal of Morphology 2019"
        venue_url: https://doi.org/10.1002/jmor.20944
        links:
          - text: paper
            url: https://doi.org/10.1002/jmor.20944
        description: 'Study showing how primate body geometry helps avoid forward pitching during rapid deceleration.'

      - title: The mechanics of acceleration and deceleration in primate quadrupeds
        image:
          src: /assets/img/work/pinkard2013.jpg
          alt: Primate acceleration mechanics
        authors: "Henry Pinkard, Daniel Schmitt, Laura E. Johnson, Charlotte E. Miller"
        venue: "FASEB Journal 2013"
        venue_url: https://doi.org/10.1096/fasebj.27.1_supplement.755.12
        links:
          - text: paper
            url: https://doi.org/10.1096/fasebj.27.1_supplement.755.12
        description: 'Analysis of how primate anatomy affects their ability to accelerate and decelerate during movement.'

---

I'm an interdisciplinary researcher with expertise in information theory, computational imaging, deep learning, biology, and software engineering. I did my PhD and postdoc in the UC Berkeley <a href="https://eecs.berkeley.edu/">EECS</a> department and <a href="https://bair.berkeley.edu/">Berkeley AI Research Lab</a>, advised by <a href="http://www.laurawaller.com/">Laura Waller</a>.

<p>My work includes:</p>
<ul>
<li>A technique to <a href="#information-driven-design-of-imaging-systems">design cameras and other sensors for AI</a> rather than for human vision</li>
<li>The <a href="#arc-agi-2---a-new-challenge-for-frontier-ai-reasoning-systems">ARC-AGI-2 benchmark</a> for testing fluid intelligence in large language models</li>
<li>A <a href="#the-berkeley-single-cell-computational-microscopy-bsccm-dataset">12-million-image biomedical dataset</a> to train computer vision algorithms</li>
<li>The most widely adopted <a href="#pycro-manager-open-source-microscope-control-software">software for automating microscopes</a>, with applications ranging from cellular imaging to nanomaterials research</li>
<li><a href="#learned-adaptive-multiphoton-illumination-microscopy">Neural network architectures</a> that incorporate physics knowledge to enable fast and low-cost scientific discovery</li>
</ul>

<p style="text-align: center">
<a href="mailto:research@henrypinkard.com">Email</a> &nbsp;/&nbsp;
<a href="https://scholar.google.com/citations?user=-CpByXMAAAAJ&hl=en">Google scholar</a> &nbsp;/&nbsp;
<a href="https://github.com/henrypinkard">GitHub</a> &nbsp;/&nbsp;
<a href="https://bsky.app/profile/henrypinkard.bsky.social">Bluesky</a>
</p>

