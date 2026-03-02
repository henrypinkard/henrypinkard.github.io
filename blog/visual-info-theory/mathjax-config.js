// MathJax v3 configuration with macros from preamble.sty
window.MathJax = {
  tex: {
    tags: 'ams',
    macros: {
      // Big bullet (mathlarger not available in MathJax, use plain bullet)
      bigbullet: '{\\bullet}',

      // Probability commands
      prob: ['{p_{\\smash{#1}\\vphantom{\\hat{T}}}}', 1],
      e: ['{\\mathbb{E}\\left[#1\\right]}', 1],
      infdivx: ['{(#1 \\; \\| \\; #2)}', 2],
      kld: ['{D_{KL}(#1 \\; \\| \\; #2)}', 2],

      data: ['{#1^{\\left(#2\\right)}}', 2],

      bphi: '{\\boldsymbol{\\phi}}',

      bmath: ['{\\boldsymbol{\\mathrm{#1}}}', 1],
      truthrv: ['{\\boldsymbol{\\mathrm{#1^{*}}}}', 1],
      hatrv: ['{\\boldsymbol{\\mathrm{\\hat{#1}}}}', 1],
      condprob: ['{p(#1 \\mid #2)}', 2],
      mutualinfo: ['{I(\\boldsymbol{\\mathrm{#1}}; \\boldsymbol{\\mathrm{#2}})}', 2],
      entropy: ['{H(\\boldsymbol{\\mathrm{#1}})}', 1],
      maxentropy: '{H_{\\text{max}}}',

      // Shorthand RVs
      ostar: '{\\boldsymbol{\\mathrm{O^{*}}}}',
      sstar: '{\\boldsymbol{\\mathrm{S^{*}}}}',
      xstar: '{\\boldsymbol{\\mathrm{X^{*}}}}',
      estar: '{\\boldsymbol{\\mathrm{E^{*}}}}',
      zstar: '{\\boldsymbol{\\mathrm{Z^{*}}}}',
      tstar: '{\\boldsymbol{\\mathrm{T^{*}}}}',

      ohat: '{\\boldsymbol{\\mathrm{\\hat{O}}}}',
      that: '{\\boldsymbol{\\mathrm{\\hat{T}}}}',
      fhat: '{\\boldsymbol{\\mathrm{\\hat{F}}}}',

      bmathx: '{\\boldsymbol{\\mathrm{X}}}',
      bmathy: '{\\boldsymbol{\\mathrm{Y}}}',
      bmathf: '{\\boldsymbol{\\mathrm{F}}}',
      bmatht: '{\\boldsymbol{\\mathrm{T}}}',
      bmaths: '{\\boldsymbol{\\mathrm{S}}}',
      thatphivec: '{\\boldsymbol{\\mathrm{\\hat{T}}}_{\\boldsymbol{\\phi}}}',

      tstarscalar: '{\\mathrm{T}^*}',

      thatphi: '{\\hat{T}_{\\boldsymbol{\\phi}}}',
      thath: '{\\hat{T}_{h}}',

      trv: '{\\mathrm{T}}',
      yrv: '{\\mathrm{Y}}',
      xrv: '{\\mathrm{X}}',
      thatrv: '{\\hat{\\mathrm{T}}}',
      trvstar: '{\\mathrm{T^*}}',

      // Encoder notation
      encoder: '{e_{\\mathbf{\\phi}}(\\cdot)}',
      encoderarg: ['{e_{\\mathbf{\\phi}}(#1)}', 1],

      pointinformation: '{\\log_2{\\frac{1}{p(x)}}}',

      // mathlarger: pandoc expands \bigbullet → \mathlarger{...{\bullet}...}
      // MathJax doesn't have relsize, so treat mathlarger as identity
      mathlarger: ['{#1}', 1],

      // \tt is deprecated LaTeX2.09; map to \texttt for MathJax
      tt: ['{\\texttt{#1}}', 1],

      // figref, figrefsub, eqncallback handled by Lua filter
    }
  },
  options: {
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process'
  }
};
