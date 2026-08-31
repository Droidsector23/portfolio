# Template Project Makefile
# Generic targets required by Auto-Registration: build, assets, clean, watch, docs, docs-clean
# Called from main Makefile via: make -C _projects/$(PROJECT_NAME) <target>

###########################################
# Project Configuration
###########################################

# Project paths (relative to workspace root)
DATE_OF_CREATION = 2026-04-15
PROJECT_SRC = $(CURDIR)
PROJECT_NAME = $(notdir $(PROJECT_SRC))
NOTEBOOK_FILENAME = $(DATE_OF_CREATION)-$(PROJECT_NAME).ipynb

# Workspace root - auto-detect depth (supports both flat and nested structures)
# If in _projects/category/project → ../../.. 
# If in _projects/project → ../..
ifeq ($(wildcard ../../Makefile),)
    WORKSPACE_ROOT = ../../..
else
    WORKSPACE_ROOT = ../..
endif

# Distribution destinations (relative to workspace root, in .gitignore)
JS_DEST = $(WORKSPACE_ROOT)/assets/js/projects/$(PROJECT_NAME)
CSS_DEST = $(WORKSPACE_ROOT)/assets/css/projects/$(PROJECT_NAME)
SASS_DEST = $(WORKSPACE_ROOT)/_sass/projects/$(PROJECT_NAME)
IMAGES_DEST = $(WORKSPACE_ROOT)/images/projects/$(PROJECT_NAME)
NOTEBOOK_DEST = $(WORKSPACE_ROOT)/_notebooks/projects/$(PROJECT_NAME)
DOCS_DEST = $(WORKSPACE_ROOT)/_posts/projects/$(PROJECT_NAME)

###########################################
# Build Targets
###########################################

# Main build target - copy notebook and call assets
build:
	@mkdir -p $(NOTEBOOK_DEST)
	@if [ -f "notebook.src.ipynb" ]; then 		cp notebook.src.ipynb $(NOTEBOOK_DEST)/$(NOTEBOOK_FILENAME) 2>/dev/null || true; 	fi
	@$(MAKE) assets
	@echo "✅ $(PROJECT_NAME) built successfully"
	@echo "   Source: _projects/$(PROJECT_NAME)/"
	@echo "   JavaScript: assets/js/projects/$(PROJECT_NAME)/"
	@echo "   CSS/SASS: assets/css/projects/$(PROJECT_NAME)/ & _sass/projects/$(PROJECT_NAME)/"

# Copy JS, SASS, and image assets
assets:
	@# Legacy level/model JS parsing
	@if [ -d "levels" ]; then mkdir -p $(JS_DEST)/levels; cp levels/*.js $(JS_DEST)/levels/ 2>/dev/null || true; fi
	@if [ -d "model" ]; then mkdir -p $(JS_DEST)/model; cp model/*.js $(JS_DEST)/model/ 2>/dev/null || true; fi
	@
	@# General JS parsing
	@if [ -d "js" ]; then mkdir -p $(JS_DEST); cp -r js/* $(JS_DEST)/ 2>/dev/null || true; fi
	@
	@# Images
	@if [ -d "images" ]; then mkdir -p $(IMAGES_DEST); cp -r images/* $(IMAGES_DEST)/ 2>/dev/null || true; fi
	@
	@# Native Jekyll SASS processing
	@if [ -d "sass" ]; then 		mkdir -p $(SASS_DEST); 		cp -r sass/* $(SASS_DEST)/ 2>/dev/null || true; 		if [ -f "$(SASS_DEST)/main.scss" ]; then 			mkdir -p $(CSS_DEST); 			echo "---" > $(CSS_DEST)/main.scss; 			echo "---" >> $(CSS_DEST)/main.scss; 			echo "@import "projects/$(PROJECT_NAME)/main";" >> $(CSS_DEST)/main.scss; 		fi; 	fi

# Clean distributed files (keeps source intact)
clean:
	@echo "🧹 Cleaning $(PROJECT_NAME) distribution..."
	@rm -rf $(NOTEBOOK_DEST)
	@rm -rf $(JS_DEST)
	@rm -rf $(CSS_DEST)
	@rm -rf $(SASS_DEST)
	@rm -rf $(IMAGES_DEST)
	@rm -rf $(DOCS_DEST)

# Placeholder docs target for auto-registration
# This project is used as a build-only project; docs can be emitted from the main site when needed.
docs:
	@echo "No docs generation configured for $(PROJECT_NAME)"

docs-clean:
	@echo "No docs cleanup configured for $(PROJECT_NAME)"

# Placeholder watch target
watch:
	@echo "Watching $(PROJECT_NAME) for changes"
