function load_papers() {

  var sections = [
    {
      'id': 'GM',
      'blurb': '',
    },
    {
      'id': 'bg',
      'blurb': '',
    },
  ]

  sections.map(function(section, i){
    var element = document.getElementById(section.id)
    if (element && section.blurb) {
      element.innerHTML = `<div class="blurb-div-h">${element.innerHTML}*<div class='blurb'>${section.blurb}</div></div>`
      // var div = document.createElement('div')
      // div.class = "blurb-div"
      // div.innerHTML = `${element.HTML}*<div class='blurb'>${section.blurb}</div>`
      // element.parentNode.replaceChild(div, element)
    }
  })

  var papers = [
    //// SSL
    {
      'tag':'seeger06',
      'href':'https://pdfs.semanticscholar.org/65a6/5817ae52e41ae640ce947d1749f42cc1ad04.pdf',
      'title':'A Taxonomy for Semi-Supervised Learning Methods',
      'authors':'Matthias Seeger',
      'citation':'Semi-Supervised Learning 2006',
      'blurb': ''
    },

    // Generative / EM-based
    {
      'tag':'nigam99',
      'href':'https://link.springer.com/article/10.1023/A:1007692713085',
      'title':'Text Classification from Labeled and Unlabeled Documents using EM',
      'authors':'Kamal Nigam, Andrew McCallum, Sebastian Thrun, Tom Mitchell',
      'citation':'Machine Learning 1999',
      'blurb': ''
    },

    // Transductive / Graph-Based
    {
      'tag':'joachims99',
      'href':'https://dl.acm.org/doi/10.5555/645528.657646',
      'title':'Transductive Inference for Text Classification using Support Vector Machines',
      'authors':'Thorsten Joachims',
      'citation':'ICML 1999',
      'blurb': ''
    },

    {
      'tag':'zhu03',
      'href':'https://dl.acm.org/doi/10.5555/3041838.3041953',
      'title':'Semi-Supervised Learning Using Gaussian Fields and Harmonic Functions',
      'authors':'Xiaojin Zhu, Zoubin Ghahramani, John Lafferty',
      'citation':'ICML 2003',
      'blurb': ''
    },

    // Disagreement-based
    {
      'tag':'blum98',
      'href':'https://dl.acm.org/doi/10.1145/279943.279962',
      'title':'Combining Labeled and Unlabeled Data with Co-Training',
      'authors':'Avril Blum, Tom Mitchell',
      'citation':'COLT 1998',
      'blurb': ''
    },

    {
      'tag':'nigam00',
      'href':'https://dl.acm.org/doi/10.1145/354756.354805',
      'title':'Analyzing the Effectiveness and Applicability of Co-Training',
      'authors':'Kamal Nigam, Rayid Ghani',
      'citation':'CIKM 2000',
      'blurb': ''
    },

    {
      'tag':'zhzhou05',
      'href':'https://dl.acm.org/doi/10.1109/TKDE.2005.186',
      'title':'Tri-Training: Exploiting Unlabeled Data Using Three Classifiers',
      'authors':'Zhi-Hua Zhou, Ming Li',
      'citation':'TKDE 2005',
      'blurb': ''
    },

    {
      'tag':'clark18',
      'href':'https://www.aclweb.org/anthology/D18-1217/',
      'title':'Semi-Supervised Sequence Modeling with Cross-View Training',
      'authors':'Kevin Clark, Minh-Thang Luong, Christopher D. Manning, Quoc V. Le',
      'citation':'EMNLP 2018',
      'blurb': ''
    },

        {
      'tag':'ruder18ssl',
      'href':'https://www.aclweb.org/anthology/P18-1096/',
      'title':'Strong Baselines for Neural Semi-supervised Learning under Domain Shift',
      'authors':'Sebastian Ruder, Barbara Plank',
      'citation':'ACL 2018',
      'blurb': ''
    },

    //// Weakly Supervised Learning
    // Coarser-grained labels - MIL
    {
      'tag':'andrews02',
      'href':'https://papers.nips.cc/paper/2232-support-vector-machines-for-multiple-instance-learning',
      'title':'Support Vector Machines for Multiple-Instance Learning',
      'authors':'Stuart Andrews, Ioannis Tsochantaridis, Thomas Hofmann',
      'citation':'NIPS 2002',
      'blurb': ''
    },

      {
      'tag':'kotzias15',
      'href':'https://dl.acm.org/doi/10.1145/2783258.2783380',
      'title':'From Group to Individual Labels using Deep Features',
      'authors':'Dimitrios Kotzias, Misha Denil, Nando de Freitas, Padhraic Smyth',
      'citation':'KDD 2015',
      'blurb': ''
    },

    {
      'tag':'angelidis18',
      'href':'https://www.aclweb.org/anthology/Q18-1002/',
      'title':'Multiple Instance Learning Networks for Fine-Grained Sentiment Analysis',
      'authors':'Stefanos Angelidis, Mirella Lapata',
      'citation':'TACL 2018',
      'blurb': ''
    },

    // Crowdsourcing / Learning with Noisy Labels
    {
      'tag':'sheng08',
      'href':'https://dl.acm.org/doi/pdf/10.1145/1401890.1401965',
      'title':'Get Another Label? Improving Data Quality and Data Mining Using Multiple, Noisy Labelers',
      'authors':'Victor S. Sheng, Foster Provost, Panagiotis G. Ipeirotis',
      'citation':'KDD 2008',
      'blurb': ''
    },

    {
      'tag':'natarajan13',
      'href':'https://dl.acm.org/doi/10.5555/2999611.2999745',
      'title':'Learning with Noisy Labels',
      'authors': 'Nagarajan Natarajan, Inderjit S. Dhillon, Pradeep Ravikumar, Ambuj Teari',
      'citation':'NIPS 2013',
      'blurb': ''
    },

    // Incorporating domain knowledge
    {
      'tag':'ganchev10',
      'href':'https://dl.acm.org/doi/10.5555/1756006.1859918',
      'title':'Posterior Regularization for Structured Latent Variable Models',
      'authors':'Kuzman Ganchev, João Graça, Jennifer Gillenwater, Ben Taskar',
      'citation':'JMLR 2010',
      'blurb': ''
    },

    {
      'tag':'yarowsky95',
      'href':'https://www.aclweb.org/anthology/P95-1026/',
      'title':'Unsupervised Word Sense Disambiguation Rivaling Supervised Methods',
      'authors':'David Yarowsky',
      'citation':'ACL 1995',
      'blurb': ''
    },

    {
      'tag':'riloff99',
      'href':'https://dl.acm.org/doi/10.5555/315149.315364',
      'title':'Learning Dictionaries for Information Extraction by Multi-Level Bootstrapping',
      'authors':'Ellen Riloff, Rosie Jones',
      'citation':'AAAI/IAAI 1999',
      'blurb': ''
    },

    {
      'tag':'collins99',
      'href':'https://www.aclweb.org/anthology/W99-0613/',
      'title':'Unsupervised Models for Named Entity Classification',
      'authors':'Michael Collins, Yoram Singer',
      'citation':'EMNLP 1999',
      'blurb': ''
    },

    {
      'tag':'agichtein00',
      'href':'https://dl.acm.org/doi/abs/10.1145/336597.336644',
      'title':'Snowball: Extracting Relations From Large Plain-Text Collections',
      'authors':'Eugene Agichtein, Luis Gravano',
      'citation':'DL 2000',
      'blurb': ''
    },

    {
      'tag':'ratner17',
      'href':'https://dl.acm.org/doi/10.14778/3157794.3157797',
      'title':'Snorkel: Rapid Training Data Creation with Weak Supervision',
      'authors':'Alexander Ratner, Stephen H. Bach, Henry Ehrenberg, Jason Fries, Sen Wu, Christopher Ré',
      'citation':'VLDB 2017',
      'blurb': ''
    },

    // Auxiliary tasks, domains, and languages
    {
      'tag':'collobert08',
      'href':'https://dl.acm.org/doi/10.1145/1390156.1390177',
      'title':'A Unified Architecture for Natural Language Processing: Deep Neural Networks with Multitask Learning',
      'authors':'Ronan Collobert, Jason Weston',
      'citation':'ICML 2008',
      'blurb': ''
    },

    {
      'tag':'kim14',
      'href':'https://www.aclweb.org/anthology/D14-1181/',
      'title':'Convolutional Neural Networks for Sentence Classification',
      'authors':'Yoon Kim',
      'citation':'EMNLP 2014',
      'blurb': ''
    },

    {
      'tag':'peters2018',
      'href':'https://www.aclweb.org/anthology/N18-1202/',
      'title':'Deep Contextualized Word Representations',
      'authors':'Matthew E. Peters, Mark Neumann, Mohit Iyyer, Matt Gardner, Christopher Clark, Kenton Lee, Luke Zettlemoyer',
      'citation':'NAACL 2018',
      'blurb': ''
    },

    {
      'tag':'howard18',
      'href':'https://www.aclweb.org/anthology/P18-1031/',
      'title':'Universal Language Model Fine-tuning for Text Classification',
      'authors':'Jeremy Howard, Sebastian Ruder',
      'citation':'ACL 2018',
      'blurb': ''
    },

    {
      'tag':'devlin19',
      'href':'https://www.aclweb.org/anthology/N19-1423/',
      'title':'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
      'authors':'Jacob Devlin, Ming-Wei Chang, Kenton Lee, Kristina Toutanova',
      'citation':'NAACL 2019',
      'blurb': ''
    },

    {
      'tag':'wan09',
      'href':'https://www.aclweb.org/anthology/P09-1027/',
      'title':'Co-Training for Cross-Lingual Sentiment Classification',
      'authors':'Xiaojun Wan',
      'citation':'ACL 2009',
      'blurb': ''
    },

    {
      'tag':'ammar16',
      'href':'https://arxiv.org/abs/1602.01925',
      'title':'Massively Multilingual Word Embeddings',
      'authors':'Waleed Ammar, George Mulcaire, Yulia Tsvetkov, Guillaume Lample, Chris Dyer, Noah A. Smith',
      'citation':'arXiv 2016',
      'blurb': ''
    },

    {
      'tag':'daume07',
      'href':'https://www.aclweb.org/anthology/P07-1033/',
      'title':'Frustratingly Easy Domain Adaptation',
      'authors':'Hal Daumé III',
      'citation':'ACL 2007',
      'blurb': ''
    },

    {
      'tag':'caruana93',
      'href':'http://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=08BB5193B31170B6CDBCCAA356357B5D?doi=10.1.1.57.3196&rep=rep1&type=pdf',
      'title':'Multitask Learning: A Knowledge-Based Source of Inductive Bias',
      'authors':'Rich Caruana',
      'citation':'ICML 1993',
      'blurb': ''
    },
    
  ];

  papers.map(function(paper, i){
    var element = document.getElementById(paper.tag)
    if (element) {
      if (paper.blurb) {
        element.innerHTML = `<div class="blurb-div"><a href="${paper.href}"><tag id="p_title">* ${paper.title}</tag></a><br><tag id="p_auth">${paper.authors}</tag><br>${paper.citation}<br><div class='blurb'>${paper.blurb}</div></div>`
      } else {
        element.innerHTML = `<div class="blurb-div"><a href="${paper.href}"><tag id="p_title">${paper.title}</tag></a><br><tag id="p_auth">${paper.authors}</tag><br>${paper.citation}<br></div>`
      }
    }

  })

}
