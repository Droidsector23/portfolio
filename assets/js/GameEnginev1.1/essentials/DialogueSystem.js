// DialogueSystem.js - Enhanced with permanent default features
// All NPCs get: voice, typewriter, neon glow, animations by default


class DialogueSystem {
constructor(options = {}) {
  // Default dialogue arrays
  this.dialogues = options.dialogues || [
    "You've come far, traveler. The skies whisper your name.",
    "The End holds secrets only the brave dare uncover.",
    "Retrieve the elytra and embrace your destiny!"
  ];
  this.id = options.id || "dialogue_" + Math.random().toString(36).substr(2, 9);
  // Make a CSS-safe id for use in element ids and class names
  this.safeId = String(this.id).replace(/\s+/g, '-').replace(/[^A-Za-z0-9\-_]/g, '');
  this.lastShownIndex = -1;
   this.dialogueBox = null;
  this.dialogueText = null;
  this.closeBtn = null;
<<<<<<< HEAD
<<<<<<< HEAD
  this.controlsRow = null;
  this.actionButtonGroup = null;
=======
>>>>>>> 5951a9a (update for v1.1)
=======
  this.controlsRow = null;
  this.actionButtonGroup = null;
>>>>>>> 3750c40 (_project and support for site.baseurl)
   // Game control reference for pausing
  this.gameControl = options.gameControl || null;
  // Track if this dialogue system paused the game
  this.didPauseGame = false;
   // Sound effect option
  this.enableSound = options.enableSound !== undefined ? options.enableSound : false;
  this.soundUrl = options.soundUrl || "./sounds/dialogue.mp3";
  this.sound = this.enableSound ? new Audio(this.soundUrl) : null;
   // Typewriter effect options - DEFAULT ENABLED
  this.typewriterSpeed = options.typewriterSpeed !== undefined ? options.typewriterSpeed : 50;
  this.enableTypewriter = options.enableTypewriter !== undefined ? options.enableTypewriter : true;
  this.typewriterTimeoutId = null;
   // Voice synthesis options - DEFAULT ENABLED
  this.enableVoice = options.enableVoice !== undefined ? options.enableVoice : true;
  this.voiceRate = options.voiceRate !== undefined ? options.voiceRate : 0.9;
  this.voicePitch = options.voicePitch !== undefined ? options.voicePitch : 1.0;
  this.voiceVolume = options.voiceVolume !== undefined ? options.voiceVolume : 1.0;
<<<<<<< HEAD
<<<<<<< HEAD
  this.lifecycleSession = null;
=======
>>>>>>> 5951a9a (update for v1.1)
=======
  this.lifecycleSession = null;
>>>>>>> 3750c40 (_project and support for site.baseurl)
   // Create the dialogue box
  this.createDialogueBox();
   // Keep track of whether the dialogue is currently open
  this.isOpen = false;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3750c40 (_project and support for site.baseurl)
 // Shared speech state so dialogue lines from different DialogueSystem instances
 // are spoken in sequence instead of interrupting each other.
 static getSpeechState() {
   if (!DialogueSystem._speechState) {
     DialogueSystem._speechState = {
       queue: [],
       speaking: false,
     };
   }
   return DialogueSystem._speechState;
 }
 
 static flushSpeechQueue() {
   const state = DialogueSystem.getSpeechState();
   state.queue = [];
   state.speaking = false;
 
   if (window.speechSynthesis) {
     window.speechSynthesis.cancel();
   }
 }
 
 static drainSpeechQueue() {
   const state = DialogueSystem.getSpeechState();
   if (state.speaking) return;
   if (!window.speechSynthesis) return;
 
   const nextUtterance = state.queue.shift();
   if (!nextUtterance) return;
 
   state.speaking = true;
 
   nextUtterance.onend = () => {
     state.speaking = false;
     DialogueSystem.drainSpeechQueue();
   };
 
   nextUtterance.onerror = () => {
     state.speaking = false;
     DialogueSystem.drainSpeechQueue();
   };
 
   window.speechSynthesis.speak(nextUtterance);
 }
<<<<<<< HEAD
=======

>>>>>>> 5951a9a (update for v1.1)
=======
>>>>>>> 3750c40 (_project and support for site.baseurl)


// Voice synthesis helper
speakText(text) {
<<<<<<< HEAD
<<<<<<< HEAD
  if (!this.enableVoice || !window.speechSynthesis) {
    return; // Voice synthesis not available or disabled
  }

  const utterance = new SpeechSynthesisUtterance(text);

  // Set voice properties
  utterance.rate = this.voiceRate;
  utterance.pitch = this.voicePitch;
  utterance.volume = this.voiceVolume;

  // Try to set Australian male voice
  const voices = window.speechSynthesis.getVoices();

  // First, look for Australian English voices
  let australianVoice = voices.find((voice) =>
    voice.lang.includes('en-AU') && voice.name.toLowerCase().includes('male')
  );

  // If no Australian male voice found, look for any Australian voice
  if (!australianVoice) {
    australianVoice = voices.find((voice) => voice.lang.includes('en-AU'));
  }

  // If still no Australian voice, look for any male voice
  if (!australianVoice) {
    australianVoice = voices.find((voice) => voice.name.toLowerCase().includes('male'));
  }

  // If no male voice found, just pick the first voice
  if (!australianVoice && voices.length > 0) {
    australianVoice = voices[0];
  }

  if (australianVoice) {
    utterance.voice = australianVoice;
  }

  const state = DialogueSystem.getSpeechState();
  state.queue.push(utterance);
  DialogueSystem.drainSpeechQueue();
=======
  // Cancel any ongoing speech
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
   if (!this.enableVoice || !window.speechSynthesis) {
=======
  if (!this.enableVoice || !window.speechSynthesis) {
>>>>>>> 3750c40 (_project and support for site.baseurl)
    return; // Voice synthesis not available or disabled
  }

  const utterance = new SpeechSynthesisUtterance(text);

  // Set voice properties
  utterance.rate = this.voiceRate;
  utterance.pitch = this.voicePitch;
  utterance.volume = this.voiceVolume;

  // Try to set Australian male voice
  const voices = window.speechSynthesis.getVoices();

  // First, look for Australian English voices
  let australianVoice = voices.find((voice) =>
    voice.lang.includes('en-AU') && voice.name.toLowerCase().includes('male')
  );

  // If no Australian male voice found, look for any Australian voice
  if (!australianVoice) {
    australianVoice = voices.find((voice) => voice.lang.includes('en-AU'));
  }

  // If still no Australian voice, look for any male voice
  if (!australianVoice) {
    australianVoice = voices.find((voice) => voice.name.toLowerCase().includes('male'));
  }

  // If no male voice found, just pick the first voice
  if (!australianVoice && voices.length > 0) {
    australianVoice = voices[0];
  }

  if (australianVoice) {
    utterance.voice = australianVoice;
  }
<<<<<<< HEAD
   // Speak the text
  window.speechSynthesis.speak(utterance);
>>>>>>> 5951a9a (update for v1.1)
=======

  const state = DialogueSystem.getSpeechState();
  state.queue.push(utterance);
  DialogueSystem.drainSpeechQueue();
>>>>>>> 3750c40 (_project and support for site.baseurl)
}




createDialogueBox() {
  // Create style element for animations if not already created
  if (!document.getElementById('dialogue-animations-' + this.safeId)) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'dialogue-animations-' + this.safeId;
    styleSheet.textContent = `
<<<<<<< HEAD
<<<<<<< HEAD
=======
      @keyframes glow-pulse-${this.safeId} {
        0%, 100% {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.7), inset 0 0 20px rgba(0, 255, 255, 0.2);
        }
        50% {
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.9), inset 0 0 30px rgba(0, 255, 255, 0.3);
        }
      }
    
      @keyframes text-glow-${this.safeId} {
        0%, 100% {
          text-shadow: 0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(74, 134, 232, 0.3);
        }
        50% {
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(74, 134, 232, 0.6);
        }
      }
    
>>>>>>> 5951a9a (update for v1.1)
=======
>>>>>>> 3453da9 (refresh for AI NPC and more)
      @keyframes char-pop-${this.safeId} {
        0% {
          opacity: 0;
          transform: scale(0.5) translateY(-10px);
        }
        50% {
          transform: scale(1.1) translateY(0);
        }
        100% {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }
    
<<<<<<< HEAD
<<<<<<< HEAD
=======
      .dialogue-text-animated-${this.safeId} {
        animation: text-glow-${this.safeId} 2s ease-in-out infinite;
      }
    
>>>>>>> 5951a9a (update for v1.1)
=======
>>>>>>> 3453da9 (refresh for AI NPC and more)
      .dialogue-char-${this.safeId} {
        display: inline-block;
        animation: char-pop-${this.safeId} 0.3s ease-out;
      }
    `;
    document.head.appendChild(styleSheet);
  }
   // Create the main dialogue container with unique ID
  this.dialogueBox = document.createElement("div");
  this.dialogueBox.id = "custom-dialogue-box-" + this.safeId;
   // Set styles for the dialogue box
  Object.assign(this.dialogueBox.style, {
    position: "fixed",
    bottom: "100px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "20px",
    maxWidth: "80%",
<<<<<<< HEAD
<<<<<<< HEAD
    fontFamily: "'Press Start 2P', cursive, monospace",
    fontSize: "14px",
    textAlign: "center",
    borderRadius: "12px",
    zIndex: "9999",
=======
    background: "rgba(0, 0, 0, 0.85)",
    color: "#00FFFF",
=======
>>>>>>> 3453da9 (refresh for AI NPC and more)
    fontFamily: "'Press Start 2P', cursive, monospace",
    fontSize: "14px",
    textAlign: "center",
    borderRadius: "12px",
    zIndex: "9999",
<<<<<<< HEAD
    animation: `glow-pulse-${this.safeId} 2s ease-in-out infinite`,
>>>>>>> 5951a9a (update for v1.1)
=======
>>>>>>> 3453da9 (refresh for AI NPC and more)
    display: "none"
  });




  // Create the avatar container for character portraits
  const avatarContainer = document.createElement("div");
  avatarContainer.id = "dialogue-avatar-" + this.safeId;
  Object.assign(avatarContainer.style, {
    width: "50px",
    height: "50px",
    marginRight: "15px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "none" // Hidden by default
  });




  // Create the header with character name
  const speakerName = document.createElement("div");
  speakerName.id = "dialogue-speaker-" + this.safeId;
  Object.assign(speakerName.style, {
    fontWeight: "bold",
<<<<<<< HEAD
<<<<<<< HEAD
=======
    color: "#4a86e8",
>>>>>>> 5951a9a (update for v1.1)
=======
>>>>>>> 3453da9 (refresh for AI NPC and more)
    marginBottom: "10px",
    fontSize: "16px"
  });




  // Create the text content area
  this.dialogueText = document.createElement("div");
  this.dialogueText.id = "dialogue-text-" + this.safeId;
  Object.assign(this.dialogueText.style, {
    marginBottom: "15px",
    lineHeight: "1.5",
    minHeight: "40px"
  });




  // Create close button
  this.closeBtn = document.createElement("button");
<<<<<<< HEAD
<<<<<<< HEAD
  this.closeBtn.id = "dialogue-close-btn-" + this.safeId;
  this.closeBtn.innerText = "Close";
  Object.assign(this.closeBtn.style, {
    marginTop: "0",
<<<<<<< HEAD
    padding: "10px 20px",
=======
=======
  this.closeBtn.id = "dialogue-close-btn-" + this.safeId;
>>>>>>> 3453da9 (refresh for AI NPC and more)
  this.closeBtn.innerText = "Close";
  Object.assign(this.closeBtn.style, {
    marginTop: "15px",
=======
>>>>>>> 3750c40 (_project and support for site.baseurl)
    padding: "10px 20px",
<<<<<<< HEAD
    background: "#4a86e8",
    color: "#fff",
>>>>>>> 5951a9a (update for v1.1)
=======
>>>>>>> 3453da9 (refresh for AI NPC and more)
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontFamily: "'Press Start 2P', cursive, monospace",
<<<<<<< HEAD
<<<<<<< HEAD
    fontSize: "12px",
    flexShrink: "0"
=======
    fontSize: "12px"
>>>>>>> 5951a9a (update for v1.1)
=======
    fontSize: "12px",
    flexShrink: "0"
>>>>>>> 3750c40 (_project and support for site.baseurl)
  });
   // Add click handler
  this.closeBtn.onclick = () => {
    this.closeDialogue();
  };

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3750c40 (_project and support for site.baseurl)
  this.controlsRow = document.createElement("div");
  this.controlsRow.id = "dialogue-controls-" + this.safeId;
  Object.assign(this.controlsRow.style, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    marginTop: "10px",
    flexWrap: "wrap"
  });

  this.actionButtonGroup = document.createElement("div");
  Object.assign(this.actionButtonGroup.style, {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    flexWrap: "wrap",
    marginLeft: "auto"
  });

<<<<<<< HEAD
=======
>>>>>>> 5951a9a (update for v1.1)
=======
>>>>>>> 3750c40 (_project and support for site.baseurl)



  // Create content container to hold text and avatar side by side
  const contentContainer = document.createElement("div");
  contentContainer.style.display = "flex";
  contentContainer.style.alignItems = "flex-start";
  contentContainer.style.marginBottom = "10px";
  contentContainer.appendChild(avatarContainer);
   // Create text container for speaker + dialogue
  const textContainer = document.createElement("div");
  textContainer.style.flexGrow = "1";
  textContainer.appendChild(speakerName);
  textContainer.appendChild(this.dialogueText);
  contentContainer.appendChild(textContainer);




  // Assemble the dialogue box
<<<<<<< HEAD
<<<<<<< HEAD
  this.controlsRow.appendChild(this.closeBtn);
  this.controlsRow.appendChild(this.actionButtonGroup);
  this.dialogueBox.appendChild(contentContainer);
  this.dialogueBox.appendChild(this.controlsRow);
=======
  this.dialogueBox.appendChild(contentContainer);
  this.dialogueBox.appendChild(this.closeBtn);
>>>>>>> 5951a9a (update for v1.1)
=======
  this.controlsRow.appendChild(this.closeBtn);
  this.controlsRow.appendChild(this.actionButtonGroup);
  this.dialogueBox.appendChild(contentContainer);
  this.dialogueBox.appendChild(this.controlsRow);
>>>>>>> 3750c40 (_project and support for site.baseurl)
   // Add to the document
  document.body.appendChild(this.dialogueBox);
   // Also listen for Escape key to close dialogue
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && this.isOpen) {
      this.closeDialogue();
    }
  });
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3750c40 (_project and support for site.baseurl)
setLifecycleSession(session) {
  this.lifecycleSession = session || null;
}

<<<<<<< HEAD
=======
>>>>>>> 5951a9a (update for v1.1)
=======
>>>>>>> 3750c40 (_project and support for site.baseurl)



// Typewriter effect helper with character animations
typewriteText(element, text, speed = this.typewriterSpeed) {
  element.innerHTML = ""; // Clear the element
  let charIndex = 0;
   const typeNextChar = () => {
    if (charIndex < text.length) {
      const char = text.charAt(charIndex);
  
      // If it's a space, just add it directly
      if (char === ' ') {
        element.appendChild(document.createTextNode(' '));
      } else {
        const charSpan = document.createElement('span');
        charSpan.className = `dialogue-char-${this.safeId}`;
        charSpan.textContent = char;
        element.appendChild(charSpan);
      }
  
      charIndex++;
      this.typewriterTimeoutId = setTimeout(typeNextChar, speed);
<<<<<<< HEAD
<<<<<<< HEAD
=======
    } else {
      // Add glow animation to the complete text
      element.classList.add(`dialogue-text-animated-${this.safeId}`);
>>>>>>> 5951a9a (update for v1.1)
=======
>>>>>>> 3453da9 (refresh for AI NPC and more)
    }
  };
   typeNextChar();
}




// Show a specific dialogue message
<<<<<<< HEAD
<<<<<<< HEAD
showDialogue(message, speaker = "", avatarSrc = null, spriteData = null) {
=======
showDialogue(message, speaker = "", avatarSrc = null) {
>>>>>>> 5951a9a (update for v1.1)
=======
showDialogue(message, speaker = "", avatarSrc = null, spriteData = null) {
>>>>>>> 3453da9 (refresh for AI NPC and more)
  // Clear any existing typewriter timeout
  if (this.typewriterTimeoutId) {
    clearTimeout(this.typewriterTimeoutId);
  }
   // Set the content (with unique element IDs)
  const speakerElement = document.getElementById("dialogue-speaker-" + this.safeId);
  if (speakerElement) {
    speakerElement.textContent = speaker;
    speakerElement.style.display = speaker ? "block" : "none";
  }
   // Set avatar if provided
  const avatarElement = document.getElementById("dialogue-avatar-" + this.safeId);
  if (avatarElement) {
    if (avatarSrc) {
      avatarElement.style.backgroundImage = `url('${avatarSrc}')`;
      avatarElement.style.display = "block";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3453da9 (refresh for AI NPC and more)
      
      // If sprite data provided with orientation (sprite sheet), show only down row, column 0
      if (spriteData && spriteData.orientation && spriteData.pixels && spriteData.down) {
        const { rows, columns } = spriteData.orientation;
        const { width, height } = spriteData.pixels;
        const { row } = spriteData.down;
        
        // Calculate frame dimensions
        const frameWidth = width / columns;
        const frameHeight = height / rows;
        
        // Scale avatar to fit nicely (max 80px on longest side)
        const maxAvatarSize = 80;
        const aspectRatio = frameWidth / frameHeight;
        let displayWidth, displayHeight;
        
        if (frameWidth > frameHeight) {
          displayWidth = Math.min(maxAvatarSize, frameWidth);
          displayHeight = displayWidth / aspectRatio;
        } else {
          displayHeight = Math.min(maxAvatarSize, frameHeight);
          displayWidth = displayHeight * aspectRatio;
        }
        
        // Calculate scale factor for background image
        const scale = displayWidth / frameWidth;
        const scaledSpriteWidth = width * scale;
        const scaledSpriteHeight = height * scale;
        
        // Calculate background position to show down row, column 0
        const bgPosX = 0; // Column 0
        const bgPosY = -(row * frameHeight * scale); // Down row
        
        // Set styles to crop to single frame
        avatarElement.style.width = `${displayWidth}px`;
        avatarElement.style.height = `${displayHeight}px`;
        avatarElement.style.backgroundSize = `${scaledSpriteWidth}px ${scaledSpriteHeight}px`;
        avatarElement.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
      } else {
        // No orientation data, show entire image
        avatarElement.style.width = "50px";
        avatarElement.style.height = "50px";
        avatarElement.style.backgroundSize = "contain";
        avatarElement.style.backgroundPosition = "center";
      }
<<<<<<< HEAD
=======
>>>>>>> 5951a9a (update for v1.1)
=======
>>>>>>> 3453da9 (refresh for AI NPC and more)
    } else {
      avatarElement.style.display = "none";
    }
  }
   // Apply typewriter effect or set text directly
  if (this.enableTypewriter) {
<<<<<<< HEAD
<<<<<<< HEAD
    this.typewriteText(this.dialogueText, message, this.typewriterSpeed);
  } else {
    this.dialogueText.textContent = message;
=======
    this.dialogueText.classList.remove(`dialogue-text-animated-${this.safeId}`);
    this.typewriteText(this.dialogueText, message, this.typewriterSpeed);
  } else {
    this.dialogueText.textContent = message;
    this.dialogueText.classList.add(`dialogue-text-animated-${this.safeId}`);
>>>>>>> 5951a9a (update for v1.1)
=======
    this.typewriteText(this.dialogueText, message, this.typewriterSpeed);
  } else {
    this.dialogueText.textContent = message;
>>>>>>> 3453da9 (refresh for AI NPC and more)
  }
   // Show the dialogue box
  this.dialogueBox.style.display = "block";
   // Pause the game if gameControl is available and not already paused
  if (this.gameControl && typeof this.gameControl.pause === 'function') {
    // Only pause if the game isn't already paused
    if (!this.gameControl.isPaused) {
      this.gameControl.pause();
      this.didPauseGame = true; // Mark that we paused it
    } else {
      this.didPauseGame = false; // We didn't pause it
    }
  }
   // Play sound effect if enabled
  if (this.sound) {
    this.sound.currentTime = 0;
    this.sound.play().catch(e => console.log("Sound play error:", e));
  }
   // Speak the dialogue text
  this.speakText(message);
   this.isOpen = true;
   // Return the dialogue box element for custom button addition
  return this.dialogueBox;
}




<<<<<<< HEAD
<<<<<<< HEAD
// Show the next dialogue from the dialogues array (cycles through sequentially)
showRandomDialogue(speaker = "", avatarSrc = null, spriteData = null) {
  if (this.dialogues.length === 0) return;
   // Increment to next dialogue, wrapping around to 0 when reaching the end
  this.lastShownIndex = (this.lastShownIndex + 1) % this.dialogues.length;
   // Show the dialogue
  const dialogue = this.dialogues[this.lastShownIndex];
  return this.showDialogue(dialogue, speaker, avatarSrc, spriteData);
=======
// Show a random dialogue from the dialogues array
showRandomDialogue(speaker = "", avatarSrc = null) {
=======
// Show the next dialogue from the dialogues array (cycles through sequentially)
showRandomDialogue(speaker = "", avatarSrc = null, spriteData = null) {
>>>>>>> 3453da9 (refresh for AI NPC and more)
  if (this.dialogues.length === 0) return;
   // Increment to next dialogue, wrapping around to 0 when reaching the end
  this.lastShownIndex = (this.lastShownIndex + 1) % this.dialogues.length;
   // Show the dialogue
<<<<<<< HEAD
  const randomDialogue = this.dialogues[randomIndex];
  return this.showDialogue(randomDialogue, speaker, avatarSrc);
>>>>>>> 5951a9a (update for v1.1)
=======
  const dialogue = this.dialogues[this.lastShownIndex];
  return this.showDialogue(dialogue, speaker, avatarSrc, spriteData);
>>>>>>> 3453da9 (refresh for AI NPC and more)
}




// Close the dialogue box
closeDialogue() {
  if (!this.isOpen) return;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3750c40 (_project and support for site.baseurl)

  if (this.lifecycleSession) {
    this.lifecycleSession.cancel();
    this.lifecycleSession = null;
  }

<<<<<<< HEAD
   // Clear typewriter timeout
  if (this.typewriterTimeoutId) {
    clearTimeout(this.typewriterTimeoutId);
    this.typewriterTimeoutId = null;
  }

  DialogueSystem.flushSpeechQueue();

=======
=======
>>>>>>> 3750c40 (_project and support for site.baseurl)
   // Clear typewriter timeout
  if (this.typewriterTimeoutId) {
    clearTimeout(this.typewriterTimeoutId);
    this.typewriterTimeoutId = null;
  }
<<<<<<< HEAD
   // Cancel speech synthesis
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
>>>>>>> 5951a9a (update for v1.1)
=======

  DialogueSystem.flushSpeechQueue();

>>>>>>> 3750c40 (_project and support for site.baseurl)
   // Hide the dialogue box
  this.dialogueBox.style.display = "none";
  this.isOpen = false;
   // Resume the game only if we were the ones who paused it
  if (this.gameControl && typeof this.gameControl.resume === 'function' && this.didPauseGame) {
    this.gameControl.resume();
    this.didPauseGame = false; // Reset the flag
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3750c40 (_project and support for site.baseurl)

  if (this.actionButtonGroup) {
    this.actionButtonGroup.innerHTML = '';
  }

  if (this.closeBtn) {
    this.closeBtn.innerText = 'Close';
    this.closeBtn.onclick = () => {
      this.closeDialogue();
    };
    this.closeBtn.style.marginRight = '0';
    this.closeBtn.style.marginLeft = '0';
    this.closeBtn.style.float = 'none';
  }
<<<<<<< HEAD
=======
   // Remove any custom buttons
  const buttonContainers = this.dialogueBox.querySelectorAll('div[style*="display: flex"]');
  buttonContainers.forEach(container => {
    // Skip the main content container
    if (container.contains(document.getElementById("dialogue-avatar-" + this.safeId))) {
      return;
    }
    container.remove();
  });
>>>>>>> 5951a9a (update for v1.1)
}
=======
}




/**
 * Remove all DOM nodes injected by this DialogueSystem instance.
 * Call this when the owning NPC or level is destroyed so elements
 * do not persist in document.body across level transitions.
 */
destroy() {
    // Close first so any pending typewriter/speech is cancelled cleanly.
    if (this.isOpen) {
      try { this.closeDialogue(); } catch (_) { /* ignore */ }
    }
>>>>>>> 3750c40 (_project and support for site.baseurl)

    // Remove the dialogue box from document.body forcibly.
    try {
      if (this.dialogueBox) {
        // Try parentNode removal first
        if (this.dialogueBox.parentNode) {
          this.dialogueBox.parentNode.removeChild(this.dialogueBox);
        }
        // If element is still in document, remove it directly
        if (document.body.contains(this.dialogueBox)) {
          document.body.removeChild(this.dialogueBox);
        }
      }
    } catch (e) {
      console.warn('DialogueSystem: error removing dialogueBox', e);
    }

    this.dialogueBox = null;
    this.dialogueText = null;
    this.closeBtn = null;
    this.controlsRow = null;
    this.actionButtonGroup = null;

    // Remove the injected <style> animation block.
    try {
      const styleEl = document.getElementById('dialogue-animations-' + this.safeId);
      if (styleEl) {
        if (styleEl.parentNode) {
          styleEl.parentNode.removeChild(styleEl);
        } else if (document.head.contains(styleEl)) {
          document.head.removeChild(styleEl);
        }
      }
    } catch (e) {
      console.warn('DialogueSystem: error removing style element', e);
    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
/**
 * Remove all DOM nodes injected by this DialogueSystem instance.
 * Call this when the owning NPC or level is destroyed so elements
 * do not persist in document.body across level transitions.
 */
destroy() {
    // Close first so any pending typewriter/speech is cancelled cleanly.
    if (this.isOpen) {
      try { this.closeDialogue(); } catch (_) { /* ignore */ }
    }

    // Remove the dialogue box from document.body forcibly.
    try {
      if (this.dialogueBox) {
        // Try parentNode removal first
        if (this.dialogueBox.parentNode) {
          this.dialogueBox.parentNode.removeChild(this.dialogueBox);
        }
        // If element is still in document, remove it directly
        if (document.body.contains(this.dialogueBox)) {
          document.body.removeChild(this.dialogueBox);
        }
      }
    } catch (e) {
      console.warn('DialogueSystem: error removing dialogueBox', e);
    }

    this.dialogueBox = null;
    this.dialogueText = null;
    this.closeBtn = null;
    this.controlsRow = null;
    this.actionButtonGroup = null;

    // Remove the injected <style> animation block.
    try {
      const styleEl = document.getElementById('dialogue-animations-' + this.safeId);
      if (styleEl) {
        if (styleEl.parentNode) {
          styleEl.parentNode.removeChild(styleEl);
        } else if (document.head.contains(styleEl)) {
          document.head.removeChild(styleEl);
        }
      }
    } catch (e) {
      console.warn('DialogueSystem: error removing style element', e);
    }
  }

=======
>>>>>>> 3750c40 (_project and support for site.baseurl)
  // Check if dialogue is currently open
  isDialogueOpen() {
    return this.isOpen;
  }
<<<<<<< HEAD

  // Add buttons to the dialogue
  addButtons(buttons) {
    if (!this.isOpen || !buttons || !Array.isArray(buttons) || buttons.length === 0 || !this.actionButtonGroup) return;

    this.actionButtonGroup.innerHTML = '';
  
    // Add each button
    buttons.forEach(button => {
      if (!button || !button.text) return;
      
      const btn = document.createElement('button');
      btn.textContent = button.text;
      btn.className = button.primary ? 'primary-button' : 'secondary-button';
      btn.style.padding = '8px 15px';
      btn.style.border = 'none';
      btn.style.borderRadius = '5px';
      btn.style.cursor = 'pointer';
      
      // Add click handler
      btn.onclick = () => {
        if (button.action && typeof button.action === 'function') {
          button.action();
        }
      };
      
      this.actionButtonGroup.appendChild(btn);
    });
  }
=======
// Check if dialogue is currently open
isDialogueOpen() {
  return this.isOpen;
}
=======
>>>>>>> 3750c40 (_project and support for site.baseurl)

  // Add buttons to the dialogue
  addButtons(buttons) {
    if (!this.isOpen || !buttons || !Array.isArray(buttons) || buttons.length === 0 || !this.actionButtonGroup) return;

    this.actionButtonGroup.innerHTML = '';
  
    // Add each button
    buttons.forEach(button => {
      if (!button || !button.text) return;
      
      const btn = document.createElement('button');
      btn.textContent = button.text;
      btn.className = button.primary ? 'primary-button' : 'secondary-button';
      btn.style.padding = '8px 15px';
      btn.style.border = 'none';
      btn.style.borderRadius = '5px';
      btn.style.cursor = 'pointer';
      
      // Add click handler
      btn.onclick = () => {
        if (button.action && typeof button.action === 'function') {
          button.action();
        }
      };
      
      this.actionButtonGroup.appendChild(btn);
    });
<<<<<<< HEAD
  
    // Insert before the close button
    if (buttonContainer.children.length > 0) {
        this.dialogueBox.insertBefore(buttonContainer, this.closeBtn);
    }
}
>>>>>>> 5951a9a (update for v1.1)
=======
  }
>>>>>>> 3750c40 (_project and support for site.baseurl)
}




export default DialogueSystem;

