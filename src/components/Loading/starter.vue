<template>
    <div class="code-container" ref="codeContainer">
      <div>{{ generatedCode }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        generatedCode: '',
        intervalId: null,
        maxLines: 20, // Bu avtomatik hisoblanadi
        isGenerating: false, // Loopni tekshirish uchun flag
        fakeCommands: [
          'Launching system services...', 'Network services initializing', 'Running integrity verification...',
          'Initializing encryption protocols...', 'Connecting to secured nodes...', 'Decrypting firewall configurations...',
          'Establishing secure channels...', 'Verifying system integrity...', 'Optimizing kernel performance...',
          'Loading AI-driven security modules...', 'Performing deep packet inspection...', 'Analyzing real-time threats...',
          'Calibrating network defense systems...', 'Scanning for unauthorized access points...', 'Deploying countermeasures...',
          'Updating anomaly detection database...', 'Parsing encrypted traffic...', 'Finalizing remote access configurations...',
          'Synchronizing with quantum security protocols...', 'Executing penetration test routines...',
          'Retrieving admin credentials...', 'Spoofing MAC addresses...', 'Brute-forcing SSH authentication...',
          'Compiling kernel exploit...', 'Dumping memory addresses...', 'Hijacking user sessions...',
          'Bypassing security firewall...', 'Interpreting system logs...', 'Gaining root access...',
          'Executing reverse shell...', 'Initializing self-destruct sequence...', 'Erasing security logs...',
          'Scanning for active network connections...', 'Exploiting database vulnerabilities...', 'Injecting malicious payload...',
          'Intercepting encrypted communication...', 'Cloning user credentials...', 'Corrupting disk partitions...',
          'Decrypting password hashes...', 'Establishing dark web connections...', 'Analyzing deep packet traffic...',
          'Simulating cyber attack...', 'Deploying ransomware module...', 'Manipulating system processes...',
          'Gathering intelligence from compromised systems...', 'Executing AI-assisted exploit...', 'Overriding security protocols...'
        ]
      };
    },
    methods: {
      calculateMaxLines() {
        const containerHeight = this.$refs.codeContainer.clientHeight;
        const lineHeight = 24; 
        this.maxLines = Math.floor(containerHeight / lineHeight);
      },
      startGenerating() {
        if (this.isGenerating) return; 
        this.isGenerating = true;
        this.calculateMaxLines();
        this.intervalId = setInterval(() => {
          const timestamp = (Math.random() * 10).toFixed(6);
          const command = this.fakeCommands[Math.floor(Math.random() * this.fakeCommands.length)];
          let lines = this.generatedCode.split('\n');
          if (lines.length >= this.maxLines) {
            lines.shift(); 
          }
          lines.push(`[  ${timestamp}] ${command}`);
          this.generatedCode = lines.join('\n');
        }, 200);
      },
      stopGenerating() {
        clearInterval(this.intervalId);
        this.isGenerating = false;
      },
    },
    mounted() {
      this.$nextTick(() => {
        this.calculateMaxLines();
        this.startGenerating();
      });
      window.addEventListener('resize', this.calculateMaxLines);
      this.$emit('started');
      this.$on('stop', this.stopGenerating);
    },
    beforeUnmount() {
      this.stopGenerating();
      window.removeEventListener('resize', this.calculateMaxLines);
    },
  };
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  .code-container {
    background-color: black;
    color: limegreen;
    font-family: "Anonymous Pro", monospace !important;
    padding: 10px;
    border-radius: 5px;
    min-height: 100vh;
    white-space: pre-wrap;
    font-size: 14px;
    line-height: 24px;
    overflow: hidden;
  }
  </style>
  